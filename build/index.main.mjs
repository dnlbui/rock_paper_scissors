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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
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
  
  
  const v81 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v84 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:23:50:application',
    fs: ['at ./index.rsh:21:13:application call to [unknown function] (defined at: ./index.rsh:21:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v81, v84],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v81, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
      
      sim_r.txns.push({
        amt: v86,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
  ;
  const v101 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:37:33:decimal', stdlib.UInt_max, '4'), v96);
  const v102 = stdlib.safeAdd(v87, v101);
  const v103 = stdlib.safeMod(v102, stdlib.checkedBigNumberify('./index.rsh:37:49:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:39:17:decimal', stdlib.UInt_max, '2'));
  const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:40:17:decimal', stdlib.UInt_max, '0'));
  const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v108 = v105 ? v106 : v107;
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v110 = v104 ? v109 : v108;
  const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:38:21:array', stdlib.UInt_max, '0')];
  const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:38:21:array', stdlib.UInt_max, '1')];
  const v113 = stdlib.safeMul(v111, v86);
  ;
  const v118 = stdlib.safeMul(v112, v86);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v103), {
    at: './index.rsh:48:24:application',
    fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:25:function exp)'],
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
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v86), {
    at: './index.rsh:31:25:application',
    fs: ['at ./index.rsh:30:11:application call to [unknown function] (defined at: ./index.rsh:30:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v94 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:32:48:application',
    fs: ['at ./index.rsh:30:11:application call to [unknown function] (defined at: ./index.rsh:30:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v85, v86, v87, v94],
    evt_cnt: 1,
    funcNum: 1,
    lct: v88,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v86, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
      
      sim_r.txns.push({
        amt: v86,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v101 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:37:33:decimal', stdlib.UInt_max, '4'), v96);
      const v102 = stdlib.safeAdd(v87, v101);
      const v103 = stdlib.safeMod(v102, stdlib.checkedBigNumberify('./index.rsh:37:49:decimal', stdlib.UInt_max, '3'));
      const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:39:17:decimal', stdlib.UInt_max, '2'));
      const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:40:17:decimal', stdlib.UInt_max, '0'));
      const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v108 = v105 ? v106 : v107;
      const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v110 = v104 ? v109 : v108;
      const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:38:21:array', stdlib.UInt_max, '0')];
      const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:38:21:array', stdlib.UInt_max, '1')];
      const v113 = stdlib.safeMul(v111, v86);
      sim_r.txns.push({
        kind: 'from',
        to: v85,
        tok: undefined /* Nothing */
        });
      const v118 = stdlib.safeMul(v112, v86);
      sim_r.txns.push({
        kind: 'from',
        to: v95,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
  ;
  const v101 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:37:33:decimal', stdlib.UInt_max, '4'), v96);
  const v102 = stdlib.safeAdd(v87, v101);
  const v103 = stdlib.safeMod(v102, stdlib.checkedBigNumberify('./index.rsh:37:49:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:39:17:decimal', stdlib.UInt_max, '2'));
  const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:40:17:decimal', stdlib.UInt_max, '0'));
  const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v108 = v105 ? v106 : v107;
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v110 = v104 ? v109 : v108;
  const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:38:21:array', stdlib.UInt_max, '0')];
  const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:38:21:array', stdlib.UInt_max, '1')];
  const v113 = stdlib.safeMul(v111, v86);
  ;
  const v118 = stdlib.safeMul(v112, v86);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v103), {
    at: './index.rsh:48:24:application',
    fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64,uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64,uint64))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAEAAEIAiYCAAEAMRhBAWQoZEkiWzUBJFs1AilkggIEpHE8lgTI0FCxNhoAjgIBIwE3ADEANRA0CyJbNQw0CyRbNQ80C4EQWzUOgAT3cRNNNAwWUDQPFlA0DhZQsDQMiAGONA+IAV00EDQPFlA0DhZQIzIGNQI1ASlMVwAwZyg0ARY0AhZQZzEZIhJEiAFVNANAAAqABBUffHU0BFCwI0MjNAESRElXACA1EEmBIFs1D4EoWzUONAsiWzUMNAskWzUNgATHtgrVNAwWUDQNFlCwNAyIARo0D4gA6TQOgQQ0DQkIgQMYNQuAEAAAAAAAAAABAAAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAAAI0CyISTYAQAAAAAAAAAAIAAAAAAAAAADQLJRJNSTUMIls0Dws0EIgAizQMJFs0DwsxAIgAfzEZgQUSRIgAmiIyCjIJiACoQv86iACIgaCNBjQGCDUGNhoBNQtC/sqIAHQ2GgE1C0L/LCIxNBJEJTE1EkQiMTYSRCIxNxJEiABVgTCvIiJC/uExGSISREL++SKyASOyELIHsgiziUiJTAlJNQYyCYgADYkJSUH/7kk1BogABYmxQv/XMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiSM1A4k0BjQHSg9B/7xC/8RJIhJMNAISEUSJsbIJQv+b`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `52`,
    101: `53`,
    102: `53`,
    103: `53`,
    104: `57`,
    105: `57`,
    106: `58`,
    107: `58`,
    108: `59`,
    109: `60`,
    11: `2`,
    110: `61`,
    111: `61`,
    112: `62`,
    113: `63`,
    114: `64`,
    115: `65`,
    116: `65`,
    117: `67`,
    118: `67`,
    119: `68`,
    12: `4`,
    120: `68`,
    121: `69`,
    122: `70`,
    123: `71`,
    124: `71`,
    125: `71`,
    126: `72`,
    127: `73`,
    128: `74`,
    129: `74`,
    13: `4`,
    130: `75`,
    131: `76`,
    132: `76`,
    133: `77`,
    134: `78`,
    135: `79`,
    136: `80`,
    137: `80`,
    138: `81`,
    139: `82`,
    14: `5`,
    140: `83`,
    141: `85`,
    142: `85`,
    143: `85`,
    144: `87`,
    145: `87`,
    146: `88`,
    147: `88`,
    148: `88`,
    149: `90`,
    15: `5`,
    150: `90`,
    151: `90`,
    152: `90`,
    153: `90`,
    154: `90`,
    155: `91`,
    156: `91`,
    157: `92`,
    158: `93`,
    159: `95`,
    16: `5`,
    160: `96`,
    161: `98`,
    162: `99`,
    163: `99`,
    164: `100`,
    165: `101`,
    166: `103`,
    167: `104`,
    168: `104`,
    169: `104`,
    17: `6`,
    170: `105`,
    171: `105`,
    172: `106`,
    173: `107`,
    174: `107`,
    175: `108`,
    176: `109`,
    177: `109`,
    178: `110`,
    179: `110`,
    18: `7`,
    180: `111`,
    181: `112`,
    182: `112`,
    183: `113`,
    184: `113`,
    185: `114`,
    186: `115`,
    187: `116`,
    188: `116`,
    189: `117`,
    19: `8`,
    190: `117`,
    191: `118`,
    192: `119`,
    193: `120`,
    194: `120`,
    195: `121`,
    196: `121`,
    197: `121`,
    198: `121`,
    199: `121`,
    2: `2`,
    20: `9`,
    200: `121`,
    201: `122`,
    202: `122`,
    203: `123`,
    204: `124`,
    205: `125`,
    206: `125`,
    207: `126`,
    208: `127`,
    209: `128`,
    21: `10`,
    210: `130`,
    211: `130`,
    212: `131`,
    213: `131`,
    214: `131`,
    215: `132`,
    216: `132`,
    217: `133`,
    218: `133`,
    219: `133`,
    22: `11`,
    220: `136`,
    221: `136`,
    222: `137`,
    223: `137`,
    224: `138`,
    225: `138`,
    226: `139`,
    227: `140`,
    228: `141`,
    229: `141`,
    23: `11`,
    230: `142`,
    231: `143`,
    232: `143`,
    233: `144`,
    234: `144`,
    235: `144`,
    236: `144`,
    237: `144`,
    238: `144`,
    239: `144`,
    24: `12`,
    240: `144`,
    241: `144`,
    242: `144`,
    243: `144`,
    244: `144`,
    245: `144`,
    246: `144`,
    247: `144`,
    248: `144`,
    249: `144`,
    25: `13`,
    250: `144`,
    251: `145`,
    252: `145`,
    253: `145`,
    254: `145`,
    255: `145`,
    256: `145`,
    257: `145`,
    258: `145`,
    259: `145`,
    26: `14`,
    260: `145`,
    261: `145`,
    262: `145`,
    263: `145`,
    264: `145`,
    265: `145`,
    266: `145`,
    267: `145`,
    268: `145`,
    269: `146`,
    27: `14`,
    270: `146`,
    271: `147`,
    272: `148`,
    273: `149`,
    274: `150`,
    275: `150`,
    276: `150`,
    277: `150`,
    278: `150`,
    279: `150`,
    28: `15`,
    280: `150`,
    281: `150`,
    282: `150`,
    283: `150`,
    284: `150`,
    285: `150`,
    286: `150`,
    287: `150`,
    288: `150`,
    289: `150`,
    29: `16`,
    290: `150`,
    291: `150`,
    292: `151`,
    293: `151`,
    294: `152`,
    295: `153`,
    296: `154`,
    297: `155`,
    298: `156`,
    299: `156`,
    3: `2`,
    30: `18`,
    300: `157`,
    301: `158`,
    302: `159`,
    303: `159`,
    304: `160`,
    305: `162`,
    306: `162`,
    307: `163`,
    308: `163`,
    309: `163`,
    31: `18`,
    310: `164`,
    311: `164`,
    312: `165`,
    313: `166`,
    314: `167`,
    315: `167`,
    316: `168`,
    317: `170`,
    318: `170`,
    319: `171`,
    32: `18`,
    320: `171`,
    321: `171`,
    322: `173`,
    323: `173`,
    324: `174`,
    325: `174`,
    326: `175`,
    327: `176`,
    328: `178`,
    329: `178`,
    33: `18`,
    330: `178`,
    331: `180`,
    332: `181`,
    333: `181`,
    334: `182`,
    335: `182`,
    336: `183`,
    337: `183`,
    338: `183`,
    339: `184`,
    34: `18`,
    340: `184`,
    341: `184`,
    342: `186`,
    343: `186`,
    344: `186`,
    345: `187`,
    346: `187`,
    347: `187`,
    348: `187`,
    349: `189`,
    35: `18`,
    350: `189`,
    351: `190`,
    352: `191`,
    353: `191`,
    354: `192`,
    355: `192`,
    356: `192`,
    357: `193`,
    358: `193`,
    359: `194`,
    36: `18`,
    360: `194`,
    361: `194`,
    362: `196`,
    363: `196`,
    364: `196`,
    365: `197`,
    366: `197`,
    367: `197`,
    368: `198`,
    369: `198`,
    37: `18`,
    370: `199`,
    371: `199`,
    372: `199`,
    373: `201`,
    374: `202`,
    375: `202`,
    376: `203`,
    377: `204`,
    378: `205`,
    379: `206`,
    38: `18`,
    380: `206`,
    381: `207`,
    382: `208`,
    383: `209`,
    384: `210`,
    385: `210`,
    386: `211`,
    387: `212`,
    388: `213`,
    389: `214`,
    39: `18`,
    390: `214`,
    391: `215`,
    392: `216`,
    393: `217`,
    394: `217`,
    395: `217`,
    396: `218`,
    397: `218`,
    398: `219`,
    399: `220`,
    4: `2`,
    40: `18`,
    400: `221`,
    401: `222`,
    402: `222`,
    403: `222`,
    404: `224`,
    405: `224`,
    406: `225`,
    407: `226`,
    408: `227`,
    409: `229`,
    41: `18`,
    410: `229`,
    411: `229`,
    412: `231`,
    413: `232`,
    414: `232`,
    415: `233`,
    416: `234`,
    417: `234`,
    418: `235`,
    419: `235`,
    42: `19`,
    420: `236`,
    421: `236`,
    422: `237`,
    423: `238`,
    424: `240`,
    425: `241`,
    426: `243`,
    427: `244`,
    428: `245`,
    429: `246`,
    43: `19`,
    430: `246`,
    431: `247`,
    432: `247`,
    433: `248`,
    434: `248`,
    435: `248`,
    436: `249`,
    437: `251`,
    438: `252`,
    439: `253`,
    44: `19`,
    440: `253`,
    441: `253`,
    442: `254`,
    443: `255`,
    444: `255`,
    445: `256`,
    446: `256`,
    447: `256`,
    448: `257`,
    449: `259`,
    45: `20`,
    450: `260`,
    451: `260`,
    452: `260`,
    453: `263`,
    454: `263`,
    455: `264`,
    456: `264`,
    457: `265`,
    458: `266`,
    459: `267`,
    46: `20`,
    460: `268`,
    461: `268`,
    462: `269`,
    463: `270`,
    464: `270`,
    465: `271`,
    466: `271`,
    467: `272`,
    468: `272`,
    469: `273`,
    47: `20`,
    470: `274`,
    471: `275`,
    472: `275`,
    473: `276`,
    474: `277`,
    475: `278`,
    476: `279`,
    477: `279`,
    478: `280`,
    479: `281`,
    48: `20`,
    480: `282`,
    481: `284`,
    482: `285`,
    483: `285`,
    484: `286`,
    485: `288`,
    486: `288`,
    487: `289`,
    488: `289`,
    489: `290`,
    49: `20`,
    490: `291`,
    491: `292`,
    492: `292`,
    493: `292`,
    494: `293`,
    495: `293`,
    496: `293`,
    497: `295`,
    498: `296`,
    499: `297`,
    5: `2`,
    50: `20`,
    500: `298`,
    501: `299`,
    502: `299`,
    503: `300`,
    504: `301`,
    505: `302`,
    506: `303`,
    507: `305`,
    508: `306`,
    509: `306`,
    51: `22`,
    510: `307`,
    52: `24`,
    53: `24`,
    54: `25`,
    55: `25`,
    56: `26`,
    57: `26`,
    58: `27`,
    59: `28`,
    6: `2`,
    60: `29`,
    61: `29`,
    62: `30`,
    63: `30`,
    64: `31`,
    65: `32`,
    66: `33`,
    67: `33`,
    68: `34`,
    69: `34`,
    7: `2`,
    70: `35`,
    71: `35`,
    72: `36`,
    73: `37`,
    74: `37`,
    75: `38`,
    76: `38`,
    77: `38`,
    78: `38`,
    79: `38`,
    8: `2`,
    80: `38`,
    81: `39`,
    82: `39`,
    83: `40`,
    84: `41`,
    85: `42`,
    86: `42`,
    87: `43`,
    88: `44`,
    89: `45`,
    9: `2`,
    90: `45`,
    91: `46`,
    92: `47`,
    93: `48`,
    94: `50`,
    95: `50`,
    96: `51`,
    97: `51`,
    98: `51`,
    99: `52`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v155","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v158","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806109a99081380391601f1980601f85011683019360018060401b0392848610848711176102e75781606092869260409889528339810103126102fd5783519261004984610302565b8051845260209385858301519286830193845201519486820195865243600355865191818301838110878211176102e7578852600080935260049060ff8254166102d0577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808a5133815283518682015287518c8201528a516060820152a15180159081156102c4575b50156102ad5783513403610296578751966100ee88610302565b8288019484865289890198858a5233905251855251875260019687845543885588519433848701525189860152516060850152606084526080840184811087821117610283578852835195861161027057600254908782811c92168015610266575b838310146102535750601f811161020c575b508093601f86116001146101a95750509183949184939461019e575b50501b916000199060031b1c1916176002555b5161068b908161031e8239f35b01519250388061017e565b600283528183209493928692918316915b888383106101f257505050106101d9575b505050811b01600255610191565b015160001960f88460031b161c191690553880806101cb565b8587015188559096019594850194879350908101906101ba565b60028352818320601f870160051c810191838810610249575b601f0160051c019087905b82811061023e575050610162565b848155018790610230565b9091508190610225565b634e487b7160e01b845260229052602483fd5b91607f1691610150565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b905060015414386100d4565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b038211176102e75760405256fe608080604052600436101561001a575b50361561001857005b005b60003560e01c9081631377727414610108575080631e93b0f1146100ea57806383230757146100cc5763ab53f2c614610053573861000f565b346100c75760003660031901126100c75760005461006f610541565b6040519182528160206040818301528251908160408401526000935b8285106100ae575050606092506000838284010152601f80199101168101030190f35b848101820151868601606001529381019385935061008b565b600080fd5b346100c75760003660031901126100c7576020600154604051908152f35b346100c75760003660031901126100c7576020600354604051908152f35b60403660031901126100c7576001600160401b03906020810190828211818310176104bd57600091604052526040519061014182610526565b600435825260243560208301526040519160a08301838110838211176104bd576040526000835260405161017481610526565b6000815260006020820152602084015260405161019081610526565b600081526000602082015260408401526040516101ac81610526565b600081526000602082015260608401526040516101c881610526565b600081526000602082015260808401526001600054036104d3576101ea610541565b6060818051810103126100c7576040519260608401908111848210176104bd576040526020810151906001600160a01b03821682036100c75760609184526040810151602085015201516040830190815260ff600454166104a4577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a76392460606040513381528451602082015260208501516040820152a181518015908115610498575b501561047f5760208301513403610466576020905191015160040360048111610450578101908181116104505781106100c757600390068252600060208301515260026020808401510152600160408301515260016020604084015101526002606083015152600060206060840151015281516002811460001461042e5750600080808060608601515b80608088015261033660018060a01b0387511691516020880151906105f6565b90828215610425575bf1156104105760008080610361819460208060808901510151910151906105f6565b81811561041c575b3390f115610410576000805560006001556103856002546104ec565b80610396575b602060405160008152f35b601f81116001146103ae575060006002555b8061038b565b6002600052601f0160051c60008051602061065f833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf5b81811061040457505060006020812081600255556103a8565b600081556001016103eb565b6040513d6000823e3d90fd5b506108fc610369565b506108fc61033f565b6104415760008080806020860151610316565b60008080806040860151610316565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b9050600154148561028c565b60405163100960cb60e01b8152600b6004820152602490fd5b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b8152600a6004820152602490fd5b90600182811c9216801561051c575b602083101461050657565b634e487b7160e01b600052602260045260246000fd5b91607f16916104fb565b604081019081106001600160401b038211176104bd57604052565b604051906000600254610553816104ec565b8085526001918083169081156105d75750600114610591575b5050829003601f01601f191682016001600160401b038111838210176104bd57604052565b6002600090815260209350918360008051602061065f8339815191525b8385106105c35750505050830101388061056c565b8054888601830152930192849082016105ae565b919250506020925060ff191682850152151560051b830101388061056c565b6000929183918115918215610613575b5050156106105750565b80fd5b8181929396500282810482148315171561064a5780956106365704143880610606565b634e487b7160e01b84526012600452602484fd5b634e487b7160e01b84526011600452602484fdfe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 2473,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:27:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:44:11:after expr stmt semicolon',
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
