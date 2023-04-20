import { loadStdlib } from '@reach-sh/stdlib'; /// imports the Reach standard library
import * as backend from './build/index.main.mjs'; // imports the compiled Reach program/ backend
const stdlib = loadStdlib(); // loads the standard library dynamically based on the REACH_CONNECTOR_MODE environment variable

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance); // creates a new test account with the specified starting balance
const accBob = await stdlib.newTestAccount(startingBalance); // only work on Reach-provided testnets

const ctcAlice = accAlice.contract(backend); // has Alice deploy the app 
const ctcBob = accBob.contract(backend, ctcAlice.getInfo()); // has Bob join the app. The second argument is the app's info object which is used to connect the two apps together

const HAND = ['Rock', 'Paper', 'Scissors'];
const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];
const Player = (Who) => ({
  getHand: () => {
    const hand = Math.floor(Math.random() * 3);
    console.log(`${Who} played ${HAND[hand]}`);
    return hand;
  },
  seeOutcome: (outcome) => {
    console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
  },
});
// initializes backend for Alice and Bob 
await Promise.all([
  ctcAlice.p.Alice({
    ...Player('Alice'),
  }),
  ctcBob.p.Bob({
    ...Player('Bob'),
  }),
]);