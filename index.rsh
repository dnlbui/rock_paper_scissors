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
  });
  const Bob   = Participant('Bob', {
    ...Player, // specify Bob's interact interface here
  });
  init(); // deploys the Reach program
  // write your program here
  //Alice interacts w/ it's frontend, gets a hand, and publishes it
  Alice.only(() => { // Alice only code block and is in the "local step" of the program. This means that Alice can interact with her frontend and act alone
    const handAlice = declassify(interact.getHand()); // handAlice is only known to Alice. Binds value to the result of interact.getHand()  and declassifies it since in Reach, all information from the frontend is classified/secret by default until made public
  });
  Alice.publish(handAlice); // Alice join the app by publishing her value to the consensus network. This is the first time Alice and Bob are connected and code is in "consensus step"
  commit(); //commits the state of the consensus network and returns to "local step" where individual participants can interact with their frontends/ act alone

  // Bob interacts w/ it's frontend, gets a hand, and publishes it. Similar to Alice's code above but for Bob we don't immediately commit the state of the network, instead we compute the outcome of the game and then commit the state of the network
  Bob.only(() => { 
    const handBob = declassify(interact.getHand());
  });
  Bob.publish(handBob); // local step and joining the app through a consensus transfer punblishcation of Bob's hand

  const outcome = (handAlice + (4 - handBob)) % 3; // compute the outcome of the game before committing the state of the network
  commit();
  // use each form to interact with the frontend of each participant
  // to have each of them see the outcome of the game to the frontend
  each([Alice, Bob], () => { // this is a local step that each of the ppts performs. interact is a Reach standard library function that allows participants to interact with their frontends
    interact.seeOutcome(outcome);
  });
});

//Alice is pretty good at Rock, Paper, Scissors!!
