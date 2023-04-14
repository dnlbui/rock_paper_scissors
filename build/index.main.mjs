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
  
  
  return;
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  
  
  return;
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 1,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCACAAEmAQAxGEEAFShkSSJbNQGBCFs1AiiCADYaAI4AACIxNBJEIzE1EkQiMTYSRCIxNxJEIzUDKCIiNQI1AUgoNAEWNAIWUGcxGSISRIgAajQDQAAKgAQVH3x1NARQsCNDMRkiEkRC/+wisgEjshCyB7IIs4lIiUwJSTUGMgmIAEWJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJMRmBBRJEiAALIjIKMgmIABNC/5Y0BjQHSg9B/7RC/7yxQv+fsbIJQv+Z`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `5`,
    100: `74`,
    101: `75`,
    102: `76`,
    103: `77`,
    104: `79`,
    105: `79`,
    106: `79`,
    107: `81`,
    108: `82`,
    109: `82`,
    11: `5`,
    110: `83`,
    111: `84`,
    112: `84`,
    113: `85`,
    114: `85`,
    115: `86`,
    116: `86`,
    117: `87`,
    118: `88`,
    119: `90`,
    12: `5`,
    120: `91`,
    121: `93`,
    122: `94`,
    123: `95`,
    124: `96`,
    125: `96`,
    126: `97`,
    127: `97`,
    128: `98`,
    129: `98`,
    13: `6`,
    130: `98`,
    131: `99`,
    132: `101`,
    133: `102`,
    134: `103`,
    135: `103`,
    136: `103`,
    137: `104`,
    138: `105`,
    139: `105`,
    14: `7`,
    140: `108`,
    141: `108`,
    142: `109`,
    143: `109`,
    144: `110`,
    145: `111`,
    146: `112`,
    147: `113`,
    148: `113`,
    149: `114`,
    15: `8`,
    150: `115`,
    151: `115`,
    152: `116`,
    153: `116`,
    154: `117`,
    155: `117`,
    156: `118`,
    157: `119`,
    158: `120`,
    159: `120`,
    16: `9`,
    160: `121`,
    161: `122`,
    162: `123`,
    163: `124`,
    164: `124`,
    165: `125`,
    166: `126`,
    167: `127`,
    168: `129`,
    169: `129`,
    17: `10`,
    170: `130`,
    171: `130`,
    172: `131`,
    173: `132`,
    174: `134`,
    175: `134`,
    176: `134`,
    177: `136`,
    178: `137`,
    179: `137`,
    18: `11`,
    180: `138`,
    181: `138`,
    182: `139`,
    183: `139`,
    184: `139`,
    185: `140`,
    186: `140`,
    187: `140`,
    188: `142`,
    189: `142`,
    19: `11`,
    190: `143`,
    191: `143`,
    192: `144`,
    193: `145`,
    194: `146`,
    195: `146`,
    196: `146`,
    197: `147`,
    198: `147`,
    199: `147`,
    2: `2`,
    20: `12`,
    200: `149`,
    201: `150`,
    202: `150`,
    203: `150`,
    204: `152`,
    205: `153`,
    206: `153`,
    207: `154`,
    21: `12`,
    22: `13`,
    23: `14`,
    24: `14`,
    25: `15`,
    26: `17`,
    27: `17`,
    28: `18`,
    29: `18`,
    3: `2`,
    30: `18`,
    31: `19`,
    32: `19`,
    33: `21`,
    34: `23`,
    35: `24`,
    36: `24`,
    37: `25`,
    38: `26`,
    39: `27`,
    4: `2`,
    40: `28`,
    41: `28`,
    42: `29`,
    43: `30`,
    44: `31`,
    45: `32`,
    46: `32`,
    47: `33`,
    48: `34`,
    49: `35`,
    5: `2`,
    50: `36`,
    51: `36`,
    52: `37`,
    53: `38`,
    54: `40`,
    55: `41`,
    56: `41`,
    57: `42`,
    58: `43`,
    59: `44`,
    6: `2`,
    60: `46`,
    61: `46`,
    62: `47`,
    63: `47`,
    64: `48`,
    65: `49`,
    66: `50`,
    67: `50`,
    68: `51`,
    69: `52`,
    7: `2`,
    70: `52`,
    71: `53`,
    72: `54`,
    73: `55`,
    74: `56`,
    75: `56`,
    76: `57`,
    77: `58`,
    78: `59`,
    79: `61`,
    8: `4`,
    80: `61`,
    81: `61`,
    82: `63`,
    83: `63`,
    84: `64`,
    85: `64`,
    86: `64`,
    87: `66`,
    88: `66`,
    89: `66`,
    9: `4`,
    90: `66`,
    91: `66`,
    92: `66`,
    93: `67`,
    94: `67`,
    95: `68`,
    96: `69`,
    97: `71`,
    98: `72`,
    99: `74`
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
  ABI: `[{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60808060405234610016576101e5908161001c8239f35b600080fdfe6080604090808252600436101561001d575b5050361561001b57005b005b600090813560e01c9081631e93b0f1146101bc5750806383230757146101995763ab53f2c60361001157346101965780600319360112610196578054918051918060025490600182811c9080841693841561018c575b60209485841081146101785783895288949392918690821561015c575050600114610121575b5050601f801996879203011681019581871060018060401b0388111761010d5785858589958694858452855282818601528551809386015281955b8387106100f45750506060945090601f9185828601015201168101030190f35b86810182015188880160600152958101958795506100d4565b634e487b7160e01b84526041600452602484fd5b90849250600286528286209186925b828410610144575050508201013880610099565b8054848b018601528995508694909301928101610130565b925093505060ff191682840152151560051b8201013880610099565b634e487b7160e01b87526022600452602487fd5b91607f1691610073565b80fd5b5090346101b857816003193601126101b8576020906001549051908152f35b5080fd5b9050346101b857816003193601126101b8576020906003548152f3fea164736f6c6343000811000a`,
  BytecodeLen: 513,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
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
