import { loadStdlib } from '@reach-sh/stdlib'; /// imports the Reach standard library
import * as backend from './build/index.main.mjs'; // imports the compiled Reach program/ backend
const stdlib = loadStdlib(); // loads the standard library dynamically based on the REACH_CONNECTOR_MODE environment variable

const startingBalance = stdlib.parseCurrency(100); // defines quantity of network tokens to be used for the starting balance
const accAlice = await stdlib.newTestAccount(startingBalance); // creates a new test account with the specified starting balance
const accBob = await stdlib.newTestAccount(startingBalance); // only work on Reach-provided testnets

const fmt = (x) => stdlib.formatCurrency(x, 4); // formats the currency to 4 decimal places
const getBalance = async (who) => fmt(await stdlib.balanceOf(who)); // gets the balance of the specified account and formats it
const beforeAlice = await getBalance(accAlice); // gets the balance of Alice's account before the program/game is run
const beforeBob = await getBalance(accBob); // gets the balance of Bob's account before the program/game is run

const ctcAlice = accAlice.contract(backend); // has Alice deploy the app. index.rsh begins after it's been deployed here in the .mjs file.
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
// waits for backends to complete. Here we are initializing the backend for Alice and Bob
await Promise.all([
  ctcAlice.p.Alice({ // initializes backend for Alice
    ...Player('Alice'),
  }),
  ctcBob.p.Bob({ // initializes backend for bob
    ...Player('Bob'),
  }),
]);