// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v58 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:20:50:application',
    fs: ['at ./index.rsh:19:13:application call to [unknown function] (defined at: ./index.rsh:19:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v58],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v60], secs: v62, time: v61, didSend: v27, from: v59 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v60], secs: v62, time: v61, didSend: v27, from: v59 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v67], secs: v69, time: v68, didSend: v36, from: v66 } = txn2;
  ;
  const v70 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, '4'), v67);
  const v71 = stdlib.safeAdd(v60, v70);
  const v72 = stdlib.safeMod(v71, stdlib.checkedBigNumberify('./index.rsh:30:49:decimal', stdlib.UInt_max, '3'));
  stdlib.protect(ctc1, await interact.seeOutcome(v72), {
    at: './index.rsh:34:24:application',
    fs: ['at ./index.rsh:33:7:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v60], secs: v62, time: v61, didSend: v27, from: v59 } = txn1;
  ;
  const v65 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:26:48:application',
    fs: ['at ./index.rsh:25:11:application call to [unknown function] (defined at: ./index.rsh:25:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v65],
    evt_cnt: 1,
    funcNum: 1,
    lct: v61,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v67], secs: v69, time: v68, didSend: v36, from: v66 } = txn2;
      
      ;
      const v70 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, '4'), v67);
      const v71 = stdlib.safeAdd(v60, v70);
      const v72 = stdlib.safeMod(v71, stdlib.checkedBigNumberify('./index.rsh:30:49:decimal', stdlib.UInt_max, '3'));
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v67], secs: v69, time: v68, didSend: v36, from: v66 } = txn2;
  ;
  const v70 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, '4'), v67);
  const v71 = stdlib.safeAdd(v60, v70);
  const v72 = stdlib.safeMod(v71, stdlib.checkedBigNumberify('./index.rsh:30:49:decimal', stdlib.UInt_max, '3'));
  stdlib.protect(ctc1, await interact.seeOutcome(v72), {
    at: './index.rsh:34:24:application',
    fs: ['at ./index.rsh:33:7:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64))void`, `_reachp_1((uint64,uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64,uint64))void`, `_reachp_1((uint64,uint64))void`]
    },
  GlobalNumByteSlice: 1,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCACAAEmAQAxGEEAvihkSSJbNQGBCFs1AiiCAgRSVv2sBMjQULE2GgCOAgB9AJEANAsiWzUMgASs0R/DNAwWUDQLVwgIULA0DIgA8SgjMgY1AjUBSCg0ARY0AhZQZzEZIhJEiADLNANAAAqABBUffHU0BFCwI0MjNAESRDQLIls1DIAEx7YK1TQMFlA0C1cICFCwNAyIAKUxGYEFEkSIAJAiMgoyCYgAokL/uogAfoGgjQY0Bgg1BjYaATULQv9wiABqNhoBNQtC/6wiMTQSRCMxNRJEIjE2EkQiMTcSRIgASygiIkL/aDEZIhJEQv97IrIBI7IQsgeyCLOJSIlMCUk1BjIJiAA/iQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiSM1A4k0BjQHSg9B/8RC/8xJIhJMNAISEUSJsUL/pbGyCUL/nw==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `5`,
    100: `58`,
    101: `58`,
    102: `60`,
    103: `60`,
    104: `61`,
    105: `61`,
    106: `61`,
    107: `63`,
    108: `63`,
    109: `63`,
    11: `5`,
    110: `63`,
    111: `63`,
    112: `63`,
    113: `64`,
    114: `64`,
    115: `65`,
    116: `66`,
    117: `68`,
    118: `69`,
    119: `71`,
    12: `5`,
    120: `72`,
    121: `72`,
    122: `73`,
    123: `74`,
    124: `76`,
    125: `76`,
    126: `77`,
    127: `78`,
    128: `79`,
    129: `79`,
    13: `6`,
    130: `80`,
    131: `80`,
    132: `80`,
    133: `80`,
    134: `80`,
    135: `80`,
    136: `81`,
    137: `81`,
    138: `82`,
    139: `83`,
    14: `7`,
    140: `84`,
    141: `84`,
    142: `85`,
    143: `85`,
    144: `85`,
    145: `86`,
    146: `87`,
    147: `89`,
    148: `89`,
    149: `90`,
    15: `8`,
    150: `90`,
    151: `90`,
    152: `92`,
    153: `92`,
    154: `93`,
    155: `93`,
    156: `94`,
    157: `95`,
    158: `97`,
    159: `97`,
    16: `9`,
    160: `97`,
    161: `99`,
    162: `100`,
    163: `100`,
    164: `101`,
    165: `101`,
    166: `102`,
    167: `102`,
    168: `102`,
    169: `103`,
    17: `10`,
    170: `103`,
    171: `103`,
    172: `105`,
    173: `105`,
    174: `105`,
    175: `106`,
    176: `106`,
    177: `106`,
    178: `106`,
    179: `108`,
    18: `11`,
    180: `108`,
    181: `109`,
    182: `110`,
    183: `110`,
    184: `111`,
    185: `111`,
    186: `111`,
    187: `112`,
    188: `112`,
    189: `113`,
    19: `11`,
    190: `113`,
    191: `113`,
    192: `115`,
    193: `115`,
    194: `115`,
    195: `116`,
    196: `116`,
    197: `116`,
    198: `117`,
    199: `117`,
    2: `2`,
    20: `12`,
    200: `118`,
    201: `118`,
    202: `118`,
    203: `120`,
    204: `121`,
    205: `121`,
    206: `122`,
    207: `123`,
    208: `124`,
    209: `125`,
    21: `12`,
    210: `125`,
    211: `126`,
    212: `127`,
    213: `128`,
    214: `129`,
    215: `129`,
    216: `130`,
    217: `131`,
    218: `132`,
    219: `133`,
    22: `13`,
    220: `133`,
    221: `134`,
    222: `135`,
    223: `136`,
    224: `136`,
    225: `136`,
    226: `137`,
    227: `138`,
    228: `139`,
    229: `140`,
    23: `14`,
    230: `140`,
    231: `140`,
    232: `142`,
    233: `142`,
    234: `143`,
    235: `144`,
    236: `145`,
    237: `147`,
    238: `147`,
    239: `147`,
    24: `14`,
    240: `149`,
    241: `150`,
    242: `150`,
    243: `151`,
    244: `152`,
    245: `152`,
    246: `153`,
    247: `153`,
    248: `154`,
    249: `154`,
    25: `15`,
    250: `155`,
    251: `156`,
    252: `158`,
    253: `159`,
    254: `161`,
    255: `162`,
    256: `163`,
    257: `164`,
    258: `164`,
    259: `165`,
    26: `17`,
    260: `165`,
    261: `166`,
    262: `166`,
    263: `166`,
    264: `167`,
    265: `169`,
    266: `170`,
    267: `171`,
    268: `171`,
    269: `171`,
    27: `17`,
    270: `172`,
    271: `173`,
    272: `173`,
    273: `176`,
    274: `176`,
    275: `177`,
    276: `177`,
    277: `178`,
    278: `179`,
    279: `180`,
    28: `17`,
    280: `181`,
    281: `181`,
    282: `182`,
    283: `183`,
    284: `183`,
    285: `184`,
    286: `184`,
    287: `185`,
    288: `185`,
    289: `186`,
    29: `17`,
    290: `187`,
    291: `188`,
    292: `188`,
    293: `189`,
    294: `190`,
    295: `191`,
    296: `192`,
    297: `192`,
    298: `193`,
    299: `194`,
    3: `2`,
    30: `17`,
    300: `195`,
    301: `197`,
    302: `198`,
    303: `198`,
    304: `199`,
    305: `201`,
    306: `201`,
    307: `202`,
    308: `202`,
    309: `203`,
    31: `17`,
    310: `204`,
    311: `205`,
    312: `205`,
    313: `205`,
    314: `206`,
    315: `206`,
    316: `206`,
    317: `208`,
    318: `209`,
    319: `210`,
    32: `17`,
    320: `211`,
    321: `212`,
    322: `212`,
    323: `213`,
    324: `214`,
    325: `215`,
    326: `216`,
    327: `218`,
    328: `219`,
    329: `219`,
    33: `17`,
    330: `219`,
    331: `221`,
    332: `222`,
    333: `222`,
    334: `223`,
    34: `17`,
    35: `17`,
    36: `17`,
    37: `17`,
    38: `18`,
    39: `18`,
    4: `2`,
    40: `18`,
    41: `19`,
    42: `19`,
    43: `19`,
    44: `19`,
    45: `19`,
    46: `19`,
    47: `21`,
    48: `23`,
    49: `23`,
    5: `2`,
    50: `24`,
    51: `25`,
    52: `26`,
    53: `26`,
    54: `27`,
    55: `27`,
    56: `27`,
    57: `27`,
    58: `27`,
    59: `27`,
    6: `2`,
    60: `28`,
    61: `28`,
    62: `29`,
    63: `30`,
    64: `31`,
    65: `31`,
    66: `32`,
    67: `32`,
    68: `32`,
    69: `33`,
    7: `2`,
    70: `34`,
    71: `36`,
    72: `36`,
    73: `37`,
    74: `37`,
    75: `37`,
    76: `39`,
    77: `40`,
    78: `41`,
    79: `41`,
    8: `4`,
    80: `43`,
    81: `43`,
    82: `44`,
    83: `44`,
    84: `45`,
    85: `46`,
    86: `47`,
    87: `47`,
    88: `48`,
    89: `49`,
    9: `4`,
    90: `49`,
    91: `50`,
    92: `51`,
    93: `52`,
    94: `53`,
    95: `53`,
    96: `54`,
    97: `55`,
    98: `56`,
    99: `58`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v105","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v108","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6106c060806001600160401b03601f1938849003601f81018216840190848210848311176102a757808591604097889485528339810103126102bd578351848101818110848211176102a7578552835181526020809401519084810191825243600355855190858201828110868211176102a7578752600080925260049260ff8454166102905760607f6de3f97962105ba8e929dd0da178e54f00336c9ea6154699025bad3d4f17547f9189519033825284518a830152518a820152a1518015908115610284575b501561026d573461025657600194858255438655865192828285015281845287840184811087821117610243578852835195861161023057600254908782811c92168015610226575b838310146102135750601f81116101cc575b508093601f86116001146101695750509183949184939461015e575b50501b916000199060031b1c1916176002555b516103fd90816102c38239f35b01519250388061013e565b600283528183209493928692918316915b888383106101b25750505010610199575b505050811b01600255610151565b015160001960f88460031b161c1916905538808061018b565b85870151885590960195948501948793509081019061017a565b60028352818320601f870160051c810191838810610209575b601f0160051c019087905b8281106101fe575050610122565b8481550187906101f0565b90915081906101e5565b634e487b7160e01b845260229052602483fd5b91607f1691610110565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b905060015414386100c7565b875163100960cb60e01b8152600781860152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060408181526004918236101561001f575b505050361561001d57005b005b600092833560e01c918263137772741461010557505080631e93b0f1146100e757806383230757146100c95763ab53f2c61461005b5780610012565b346100c557816003193601126100c5578154610075610313565b91805193849283526020828185015284518093850152815b8381106100ae57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161008d565b5080fd5b50346100c557816003193601126100c5576020906001549051908152f35b50346100c557816003193601126100c5576020906003549051908152f35b838591816003193601126102d5576020936001600160401b0391808601838111828210176102c2578452849052825191828401908111838210176102af578352803582528482019160243583526001928386540361029857610165610313565b878180518101031261029457870151801515036102905760ff8354166102795760607fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a7639249186519033825284518a8301525187820152a151801590811561026e575b5015610257573461024057508280558281556101e36002546102d9565b806101f1575b505051908152f35b601f811160011461020a575050816002555b83806101e9565b6002845281601f868620920160051c820191015b81811061023657505050818381208160025555610203565b848155820161021e565b602490600d84519163100960cb60e01b8352820152fd5b602490600c84519163100960cb60e01b8352820152fd5b9050825414866101c6565b845163100960cb60e01b8152600b81850152602490fd5b8580fd5b8680fd5b845163100960cb60e01b8152600a81850152602490fd5b634e487b7160e01b855260418252602485fd5b634e487b7160e01b865260418352602486fd5b8280fd5b90600182811c92168015610309575b60208310146102f357565b634e487b7160e01b600052602260045260246000fd5b91607f16916102e8565b604051906000600254610325816102d9565b8085526001918083169081156103d15750600114610379575b5050829003601f01601f191682016001600160401b0381118382101761036357604052565b634e487b7160e01b600052604160045260246000fd5b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b8385106103bd5750505050830101388061033e565b8054888601830152930192849082016103a8565b919250506020925060ff191682850152151560051b830101388061033e56fea164736f6c6343000811000a`,
  BytecodeLen: 1728,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:23:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:31:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
