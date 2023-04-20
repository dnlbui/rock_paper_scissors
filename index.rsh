'reach 0.1';

const Player = {
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    //interact interface is defined in the Reach standard library and is used to interact with the user in the browser or the terminal depending on the environment the program is run in. 
    ...Player, // specify Alice's interact interface here
  });
  const Bob   = Participant('Bob', {
    ...Player, // specify Bob's interact interface here
  });
  init();
  // write your program here

  Alice.only(() => {
    const handAlice = declassify(interact.getHand());
  });
  Alice.publish(handAlice);
  commit();

  Bob.only(() => {
    const handBob = declassify(interact.getHand());
  });
  Bob.publish(handBob);

  const outcome = (handAlice + (4 - handBob)) % 3;
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
