'reach 0.1';
// define participant interact interface that will be shared between Alice and Bob.
const Player = {
  getHand: Fun([], UInt), //returns a number between 0 and 2
  seeOutcome: Fun([UInt], Null), // receives/takes a number between 0 and 2
};

export const main = Reach.App(() => { // main function that is called when the program is run
  const Alice = Participant('Alice', { 
    //interact interface is defined in the Reach standard library and is used to interact with the user in the frontend. 
    ...Player, // specify Alice's interact interface here
    wager: UInt,
  });
  const Bob   = Participant('Bob', {
    ...Player, // specify Bob's interact interface here
    acceptWager: Fun([UInt], Null), // Bob's interact interface has a function that takes a UInt and returns Null. acceptWager method that can look at the wager value
  });
  init(); // deploys the Reach program
  // write your program here
  //Alice interacts w/ it's frontend, gets a hand, and publishes it
  Alice.only(() => { // Alice only code block and is in the "local step" of the program. This means that Alice can interact with her frontend and act alone
    const wager = declassify(interact.wager); // declassify wager for transmission
    const handAlice = declassify(interact.getHand()); // handAlice is only known to Alice. Binds value to the result of interact.getHand()  and declassifies it since in Reach, all information from the frontend is classified/secret by default until made public
  });
  Alice.publish(wager, handAlice) // Alice join the app by publishing her value to the consensus network. This is the first time Alice and Bob are connected and code is in "consensus step" // Alice shares the wager amount with Bob
    .pay(wager); // transfers the wager amount as part of her publication to the consensus network
  commit(); //commits the state of the consensus network and returns to "local step" where individual participants can interact with their frontends/ act alone

  // Bob interacts w/ it's frontend, gets a hand, and publishes it. Similar to Alice's code above but for Bob we don't immediately commit the state of the network, instead we compute the outcome of the game and then commit the state of the network
  Bob.only(() => { 
    interact.acceptWager(wager);
    const handBob = declassify(interact.getHand());
  });
  Bob.publish(handBob) // local step and joining the app through a consensus transfer punblishcation of Bob's hand
    .pay(wager); // Bob pays Alice the wager amount

  const outcome = (handAlice + (4 - handBob)) % 3; // compute the outcome of the game before committing the state of the network
  const             [forAlice, forBob] = 
    outcome === 2 ? [2       , 0] :
    outcome === 0 ? [0       , 2] :
                    [1       , 1]; // compute the amount of money that Alice and Bob will receive based on the outcome of the game
  transfer(forAlice * wager).to(Alice);
  transfer(forBob * wager).to(Bob); // transfer the money to Alice and Bob based on the outcome of the game from the contract
  commit(); // commits state of the app and allows ptps to see outcome and complete
  // use each form to interact with the frontend of each participant
  // to have each of them see the outcome of the game to the frontend
  each([Alice, Bob], () => { // this is a local step that each of the ppts performs. interact is a Reach standard library function that allows participants to interact with their frontends
    interact.seeOutcome(outcome);
  });
});

//Alice is pretty good at Rock, Paper, Scissors!!
