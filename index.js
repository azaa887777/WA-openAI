const _0x4e4813=_0xe550;(function(_0xe0ab1b,_0x534783){const _0x412f14=_0xe550,_0x4c5d32=_0xe0ab1b();while(!![]){try{const _0x3fa422=-parseInt(_0x412f14(0x150))/0x1+parseInt(_0x412f14(0x15e))/0x2+parseInt(_0x412f14(0xe3))/0x3+parseInt(_0x412f14(0x101))/0x4+parseInt(_0x412f14(0x100))/0x5*(-parseInt(_0x412f14(0x16f))/0x6)+-parseInt(_0x412f14(0x11d))/0x7*(parseInt(_0x412f14(0xe4))/0x8)+-parseInt(_0x412f14(0x179))/0x9;if(_0x3fa422===_0x534783)break;else _0x4c5d32['push'](_0x4c5d32['shift']());}catch(_0x45c507){_0x4c5d32['push'](_0x4c5d32['shift']());}}}(_0x1bca,0x56148));const sessionName=_0x4e4813(0x107),donet='fb.com/oussama.bakrine',owner=[_0x4e4813(0x123)],{default:sansekaiConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto,getContentType}=require(_0x4e4813(0xfb)),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x4e4813(0xea)),pino=require(_0x4e4813(0x136)),{Boom}=require(_0x4e4813(0x114)),fs=require('fs'),axios=require('axios'),chalk=require(_0x4e4813(0x10a)),figlet=require(_0x4e4813(0x164)),_=require('lodash'),PhoneNumber=require(_0x4e4813(0xfd)),store=makeInMemoryStore({'logger':pino()[_0x4e4813(0x168)]({'level':_0x4e4813(0x16a),'stream':_0x4e4813(0x154)})}),color=(_0x4f7e8f,_0x2572ac)=>{const _0x4178de=_0x4e4813;return!_0x2572ac?chalk[_0x4178de(0xf4)](_0x4f7e8f):chalk['keyword'](_0x2572ac)(_0x4f7e8f);};function smsg(_0x394e1e,_0x214bdb,_0x378f62){const _0x583fdc=_0x4e4813;if(!_0x214bdb)return _0x214bdb;let _0x57a6ed=proto[_0x583fdc(0x132)];if(_0x214bdb[_0x583fdc(0x10b)]){_0x214bdb['id']=_0x214bdb[_0x583fdc(0x10b)]['id'],_0x214bdb[_0x583fdc(0xec)]=_0x214bdb['id'][_0x583fdc(0x147)](_0x583fdc(0xe9))&&_0x214bdb['id'][_0x583fdc(0x152)]===0x10,_0x214bdb[_0x583fdc(0x12c)]=_0x214bdb[_0x583fdc(0x10b)]['remoteJid'],_0x214bdb[_0x583fdc(0x13d)]=_0x214bdb[_0x583fdc(0x10b)][_0x583fdc(0x13d)],_0x214bdb[_0x583fdc(0x129)]=_0x214bdb[_0x583fdc(0x12c)][_0x583fdc(0x178)]('@g.us'),_0x214bdb[_0x583fdc(0xf0)]=_0x394e1e[_0x583fdc(0x153)](_0x214bdb[_0x583fdc(0x13d)]&&_0x394e1e[_0x583fdc(0xf2)]['id']||_0x214bdb[_0x583fdc(0x108)]||_0x214bdb[_0x583fdc(0x10b)][_0x583fdc(0x108)]||_0x214bdb[_0x583fdc(0x12c)]||'');if(_0x214bdb[_0x583fdc(0x129)])_0x214bdb[_0x583fdc(0x108)]=_0x394e1e[_0x583fdc(0x153)](_0x214bdb['key']['participant'])||'';}if(_0x214bdb[_0x583fdc(0xe8)]){_0x214bdb[_0x583fdc(0xf9)]=getContentType(_0x214bdb[_0x583fdc(0xe8)]),_0x214bdb[_0x583fdc(0x12d)]=_0x214bdb[_0x583fdc(0xf9)]==_0x583fdc(0x145)?_0x214bdb[_0x583fdc(0xe8)][_0x214bdb['mtype']][_0x583fdc(0xe8)][getContentType(_0x214bdb[_0x583fdc(0xe8)][_0x214bdb[_0x583fdc(0xf9)]][_0x583fdc(0xe8)])]:_0x214bdb[_0x583fdc(0xe8)][_0x214bdb[_0x583fdc(0xf9)]],_0x214bdb[_0x583fdc(0x158)]=_0x214bdb[_0x583fdc(0xe8)]['conversation']||_0x214bdb[_0x583fdc(0x12d)]['caption']||_0x214bdb[_0x583fdc(0x12d)][_0x583fdc(0x13f)]||_0x214bdb[_0x583fdc(0xf9)]==_0x583fdc(0xfa)&&_0x214bdb['msg'][_0x583fdc(0xf6)][_0x583fdc(0x117)]||_0x214bdb[_0x583fdc(0xf9)]==_0x583fdc(0xe7)&&_0x214bdb[_0x583fdc(0x12d)][_0x583fdc(0x126)]||_0x214bdb[_0x583fdc(0xf9)]==_0x583fdc(0x145)&&_0x214bdb['msg'][_0x583fdc(0x131)]||_0x214bdb[_0x583fdc(0x13f)];let _0x34e2a3=_0x214bdb[_0x583fdc(0x175)]=_0x214bdb[_0x583fdc(0x12d)]['contextInfo']?_0x214bdb[_0x583fdc(0x12d)][_0x583fdc(0x133)]['quotedMessage']:null;_0x214bdb['mentionedJid']=_0x214bdb[_0x583fdc(0x12d)][_0x583fdc(0x133)]?_0x214bdb[_0x583fdc(0x12d)][_0x583fdc(0x133)][_0x583fdc(0x11b)]:[];if(_0x214bdb['quoted']){let _0x4505ba=getContentType(_0x34e2a3);_0x214bdb['quoted']=_0x214bdb[_0x583fdc(0x175)][_0x4505ba];[_0x583fdc(0x110)]['includes'](_0x4505ba)&&(_0x4505ba=getContentType(_0x214bdb[_0x583fdc(0x175)]),_0x214bdb['quoted']=_0x214bdb[_0x583fdc(0x175)][_0x4505ba]);if(typeof _0x214bdb['quoted']===_0x583fdc(0x16d))_0x214bdb['quoted']={'text':_0x214bdb[_0x583fdc(0x175)]};_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0xf9)]=_0x4505ba,_0x214bdb[_0x583fdc(0x175)]['id']=_0x214bdb['msg'][_0x583fdc(0x133)][_0x583fdc(0x177)],_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x12c)]=_0x214bdb[_0x583fdc(0x12d)][_0x583fdc(0x133)][_0x583fdc(0x111)]||_0x214bdb[_0x583fdc(0x12c)],_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0xec)]=_0x214bdb[_0x583fdc(0x175)]['id']?_0x214bdb[_0x583fdc(0x175)]['id'][_0x583fdc(0x147)](_0x583fdc(0xe9))&&_0x214bdb[_0x583fdc(0x175)]['id'][_0x583fdc(0x152)]===0x10:![],_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0xf0)]=_0x394e1e['decodeJid'](_0x214bdb['msg'][_0x583fdc(0x133)][_0x583fdc(0x108)]),_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x13d)]=_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0xf0)]===_0x394e1e['decodeJid'](_0x394e1e[_0x583fdc(0xf2)]['id']),_0x214bdb['quoted']['text']=_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x13f)]||_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x131)]||_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x12a)]||_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x121)]||_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x119)]||_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0xf5)]||'',_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x11b)]=_0x214bdb[_0x583fdc(0x12d)][_0x583fdc(0x133)]?_0x214bdb[_0x583fdc(0x12d)][_0x583fdc(0x133)]['mentionedJid']:[],_0x214bdb['getQuotedObj']=_0x214bdb['getQuotedMessage']=async()=>{const _0x3164e4=_0x583fdc;if(!_0x214bdb[_0x3164e4(0x175)]['id'])return![];let _0x3f5ed1=await _0x378f62[_0x3164e4(0x13c)](_0x214bdb[_0x3164e4(0x12c)],_0x214bdb[_0x3164e4(0x175)]['id'],_0x394e1e);return exports[_0x3164e4(0x106)](_0x394e1e,_0x3f5ed1,_0x378f62);};let _0xf0db06=_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0xf7)]=_0x57a6ed[_0x583fdc(0x169)]({'key':{'remoteJid':_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x12c)],'fromMe':_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x13d)],'id':_0x214bdb['quoted']['id']},'message':_0x34e2a3,..._0x214bdb[_0x583fdc(0x129)]?{'participant':_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0xf0)]}:{}});_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x148)]=()=>_0x394e1e[_0x583fdc(0x10d)](_0x214bdb['quoted'][_0x583fdc(0x12c)],{'delete':_0xf0db06[_0x583fdc(0x10b)]}),_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x13a)]=(_0x242dba,_0xbb077a=![],_0x20345c={})=>_0x394e1e[_0x583fdc(0x13a)](_0x242dba,_0xf0db06,_0xbb077a,_0x20345c),_0x214bdb[_0x583fdc(0x175)][_0x583fdc(0x161)]=()=>_0x394e1e[_0x583fdc(0x139)](_0x214bdb[_0x583fdc(0x175)]);}}if(_0x214bdb[_0x583fdc(0x12d)][_0x583fdc(0x165)])_0x214bdb[_0x583fdc(0x161)]=()=>_0x394e1e[_0x583fdc(0x139)](_0x214bdb[_0x583fdc(0x12d)]);return _0x214bdb['text']=_0x214bdb[_0x583fdc(0x12d)][_0x583fdc(0x13f)]||_0x214bdb[_0x583fdc(0x12d)][_0x583fdc(0x131)]||_0x214bdb[_0x583fdc(0xe8)][_0x583fdc(0x12a)]||_0x214bdb['msg'][_0x583fdc(0x121)]||_0x214bdb['msg']['selectedDisplayText']||_0x214bdb['msg'][_0x583fdc(0xf5)]||'',_0x214bdb[_0x583fdc(0x14c)]=(_0x328cd2,_0x520b7a=_0x214bdb['chat'],_0x5b1c68={})=>Buffer[_0x583fdc(0x122)](_0x328cd2)?_0x394e1e[_0x583fdc(0xe6)](_0x520b7a,_0x328cd2,'file','',_0x214bdb,{..._0x5b1c68}):_0x394e1e[_0x583fdc(0xff)](_0x520b7a,_0x328cd2,_0x214bdb,{..._0x5b1c68}),_0x214bdb[_0x583fdc(0x155)]=()=>exports['smsg'](_0x394e1e,_0x57a6ed[_0x583fdc(0x169)](_0x57a6ed['toObject'](_0x214bdb))),_0x214bdb['copyNForward']=(_0x24b90f=_0x214bdb[_0x583fdc(0x12c)],_0x21a5ad=![],_0x5daffc={})=>_0x394e1e[_0x583fdc(0x13a)](_0x24b90f,_0x214bdb,_0x21a5ad,_0x5daffc),_0x214bdb;}async function startHisoka(){const _0x4654e6=_0x4e4813,{version:_0x34cbd3,isLatest:_0x2a2a9e}=await fetchLatestBaileysVersion();console[_0x4654e6(0xef)](_0x4654e6(0x13b)+_0x34cbd3['join']('.')+_0x4654e6(0xe5)+_0x2a2a9e),console[_0x4654e6(0xef)](color(figlet[_0x4654e6(0x14d)](_0x4654e6(0x16c),{'font':'Standard','horizontalLayout':_0x4654e6(0x109),'vertivalLayout':'default','whitespaceBreak':![]}),_0x4654e6(0xf4)));const _0x17cd8a=sansekaiConnect({'logger':pino({'level':'silent'}),'printQRInTerminal':!![],'browser':['Wa-OpenAI\x20-\x20oussama',_0x4654e6(0x116),_0x4654e6(0x10e)],'auth':state});store[_0x4654e6(0x112)](_0x17cd8a['ev']),_0x17cd8a['ev']['on']('messages.upsert',async _0xd7fa29=>{const _0x4e8eab=_0x4654e6;try{mek=_0xd7fa29['messages'][0x0];if(!mek[_0x4e8eab(0xe8)])return;mek[_0x4e8eab(0xe8)]=Object[_0x4e8eab(0xf1)](mek[_0x4e8eab(0xe8)])[0x0]==='ephemeralMessage'?mek[_0x4e8eab(0xe8)][_0x4e8eab(0x167)][_0x4e8eab(0xe8)]:mek['message'];if(mek[_0x4e8eab(0x10b)]&&mek[_0x4e8eab(0x10b)][_0x4e8eab(0x111)]===_0x4e8eab(0x135))return;if(!_0x17cd8a[_0x4e8eab(0x11f)]&&!mek[_0x4e8eab(0x10b)][_0x4e8eab(0x13d)]&&_0xd7fa29[_0x4e8eab(0xfc)]===_0x4e8eab(0x157))return;if(mek[_0x4e8eab(0x10b)]['id'][_0x4e8eab(0x147)](_0x4e8eab(0xe9))&&mek[_0x4e8eab(0x10b)]['id'][_0x4e8eab(0x152)]===0x10)return;m=smsg(_0x17cd8a,mek,store),require('./sansekai')(_0x17cd8a,m,_0xd7fa29,store);}catch(_0x5b7f95){console[_0x4e8eab(0xef)](_0x5b7f95);}});const _0x31494e=new Map();process['on'](_0x4654e6(0x137),(_0x1c8f2,_0x3bf543)=>{const _0x39fee0=_0x4654e6;_0x31494e[_0x39fee0(0x11c)](_0x3bf543,_0x1c8f2),console[_0x39fee0(0xef)](_0x39fee0(0x130),_0x3bf543,_0x39fee0(0x166),_0x1c8f2);}),process['on']('rejectionHandled',_0x2ef57d=>{const _0x259c40=_0x4654e6;_0x31494e[_0x259c40(0x148)](_0x2ef57d);}),process['on'](_0x4654e6(0x176),function(_0x3279cd){const _0x5c9c88=_0x4654e6;console['log'](_0x5c9c88(0x14f),_0x3279cd);}),_0x17cd8a[_0x4654e6(0x153)]=_0x47310d=>{const _0x2ccac0=_0x4654e6;if(!_0x47310d)return _0x47310d;if(/:\d+@/gi[_0x2ccac0(0x162)](_0x47310d)){let _0x47c42a=jidDecode(_0x47310d)||{};return _0x47c42a[_0x2ccac0(0xf2)]&&_0x47c42a[_0x2ccac0(0x14b)]&&_0x47c42a[_0x2ccac0(0xf2)]+'@'+_0x47c42a[_0x2ccac0(0x14b)]||_0x47310d;}else return _0x47310d;},_0x17cd8a['ev']['on'](_0x4654e6(0x170),_0x61c1c2=>{const _0x9e408f=_0x4654e6;for(let _0x30fcdf of _0x61c1c2){let _0x2d9716=_0x17cd8a[_0x9e408f(0x153)](_0x30fcdf['id']);if(store&&store['contacts'])store['contacts'][_0x2d9716]={'id':_0x2d9716,'name':_0x30fcdf[_0x9e408f(0x157)]};}}),_0x17cd8a[_0x4654e6(0x11a)]=(_0x39d8c9,_0x160366=![])=>{const _0x398ffd=_0x4654e6;id=_0x17cd8a[_0x398ffd(0x153)](_0x39d8c9),_0x160366=_0x17cd8a[_0x398ffd(0x118)]||_0x160366;let _0x32a78d;if(id[_0x398ffd(0x178)]('@g.us'))return new Promise(async _0x1456a4=>{const _0x4e342b=_0x398ffd;_0x32a78d=store[_0x4e342b(0x171)][id]||{};if(!(_0x32a78d[_0x4e342b(0x102)]||_0x32a78d[_0x4e342b(0x104)]))_0x32a78d=_0x17cd8a[_0x4e342b(0x10f)](id)||{};_0x1456a4(_0x32a78d[_0x4e342b(0x102)]||_0x32a78d['subject']||PhoneNumber('+'+id[_0x4e342b(0xf8)](_0x4e342b(0x142),''))[_0x4e342b(0x115)](_0x4e342b(0x140)));});else _0x32a78d=id===_0x398ffd(0xed)?{'id':id,'name':'WhatsApp'}:id===_0x17cd8a['decodeJid'](_0x17cd8a['user']['id'])?_0x17cd8a['user']:store[_0x398ffd(0x171)][id]||{};return(_0x160366?'':_0x32a78d['name'])||_0x32a78d[_0x398ffd(0x104)]||_0x32a78d[_0x398ffd(0x15d)]||PhoneNumber('+'+_0x39d8c9[_0x398ffd(0xf8)](_0x398ffd(0x142),''))[_0x398ffd(0x115)]('international');},_0x17cd8a[_0x4654e6(0x15a)]=_0x355db5=>{const _0x24725d=_0x4654e6;return _0x17cd8a[_0x24725d(0x120)]({'tag':'iq','attrs':{'to':'@s.whatsapp.net','type':_0x24725d(0x11c),'xmlns':_0x24725d(0x138)},'content':[{'tag':_0x24725d(0x138),'attrs':{},'content':Buffer[_0x24725d(0x128)](_0x355db5,_0x24725d(0x144))}]}),_0x355db5;},_0x17cd8a[_0x4654e6(0x11f)]=!![],_0x17cd8a[_0x4654e6(0x14a)]=_0x54dddc=>smsg(_0x17cd8a,_0x54dddc,store),_0x17cd8a['ev']['on'](_0x4654e6(0x11e),async _0x58a33a=>{const _0x31e38d=_0x4654e6,{connection:_0x12ea4c,lastDisconnect:_0x443555}=_0x58a33a;if(_0x12ea4c===_0x31e38d(0x149)){let _0x2987c0=new Boom(_0x443555?.[_0x31e38d(0x16e)])?.[_0x31e38d(0x151)][_0x31e38d(0x156)];if(_0x2987c0===DisconnectReason[_0x31e38d(0x141)])console[_0x31e38d(0xef)]('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again'),process[_0x31e38d(0xee)]();else{if(_0x2987c0===DisconnectReason[_0x31e38d(0x105)])console[_0x31e38d(0xef)](_0x31e38d(0x159)),startHisoka();else{if(_0x2987c0===DisconnectReason[_0x31e38d(0x10c)])console['log'](_0x31e38d(0x103)),startHisoka();else{if(_0x2987c0===DisconnectReason[_0x31e38d(0x174)])console[_0x31e38d(0xef)](_0x31e38d(0x172)),process['exit']();else{if(_0x2987c0===DisconnectReason[_0x31e38d(0x13e)])console['log']('Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20file\x20oussama.json\x20and\x20Scan\x20Again.'),process[_0x31e38d(0xee)]();else{if(_0x2987c0===DisconnectReason[_0x31e38d(0x12f)])console[_0x31e38d(0xef)]('Restart\x20Required,\x20Restarting...'),startHisoka();else _0x2987c0===DisconnectReason[_0x31e38d(0x127)]?(console[_0x31e38d(0xef)](_0x31e38d(0x143)),startHisoka()):(console[_0x31e38d(0xef)](_0x31e38d(0x17a)+_0x2987c0+'|'+_0x12ea4c),startHisoka());}}}}}}else _0x12ea4c===_0x31e38d(0xfe)&&(console[_0x31e38d(0xef)](color('Bot\x20success\x20conneted\x20to\x20server',_0x31e38d(0xf4))),console[_0x31e38d(0xef)](color('Donate\x20for\x20creator\x20fb.com/oussama.bakrine',_0x31e38d(0x15f))),console['log'](color(_0x31e38d(0x124))),_0x17cd8a[_0x31e38d(0x10d)](owner+_0x31e38d(0x142),{'text':'Bot\x20started!\x0a\x0afollow\x20me\x20please\x20in😐\x0a\x20fb.com/oussama.bakrine\x0ainstagram.com/oussama_bakrine\x0a\x0athanks\x20for\x20using\x20my\x20bot\x20:)\x20'}));}),_0x17cd8a['ev']['on'](_0x4654e6(0x16b),saveState);const _0x56539a=async(_0x2e0d8e,_0x483276)=>{const _0x15b503=_0x4654e6;try{_0x483276?_0x483276:{};const _0x52e3b9=await axios({'method':'get','url':_0x2e0d8e,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x483276,'responseType':_0x15b503(0x15b)});return _0x52e3b9[_0x15b503(0x14e)];}catch(_0x2dea7b){return _0x2dea7b;}};return _0x17cd8a[_0x4654e6(0xf3)]=async(_0x1d0b59,_0x1fcee0,_0x5a7e18='',_0x203d9d='',_0x441801)=>{const _0x418681=_0x4654e6;let _0x592907=Buffer[_0x418681(0x122)](_0x1fcee0)?_0x1fcee0:/^data:.*?\/.*?;base64,/i[_0x418681(0x162)](_0x1fcee0)?Buffer[_0x418681(0x128)](_0x1fcee0[_0x418681(0x134)]`,`[0x1],'base64'):/^https?:\/\//[_0x418681(0x162)](_0x1fcee0)?await await _0x56539a(_0x1fcee0):fs[_0x418681(0x163)](_0x1fcee0)?fs['readFileSync'](_0x1fcee0):Buffer[_0x418681(0xeb)](0x0);return await _0x17cd8a[_0x418681(0x10d)](_0x1d0b59,{'image':_0x592907,'caption':_0x5a7e18,..._0x441801},{'quoted':_0x203d9d});},_0x17cd8a['sendText']=(_0xbcb58e,_0x4b516c,_0x42b2a7='',_0x57936b)=>_0x17cd8a[_0x4654e6(0x10d)](_0xbcb58e,{'text':_0x4b516c,..._0x57936b},{'quoted':_0x42b2a7}),_0x17cd8a[_0x4654e6(0x15c)]=(_0x1ee4b8,_0x383dc7,_0x2b6878='',_0x286b95=_0x17cd8a['user']['id'],_0x2b4fac={})=>{const _0x4c0ff4=_0x4654e6;let _0x2f9fab=Object[_0x4c0ff4(0xf1)](_0x383dc7[_0x4c0ff4(0xe8)])[0x0],_0x30b716=_0x2f9fab===_0x4c0ff4(0x167);_0x30b716&&(_0x2f9fab=Object[_0x4c0ff4(0xf1)](_0x383dc7[_0x4c0ff4(0xe8)][_0x4c0ff4(0x167)][_0x4c0ff4(0xe8)])[0x0]);let _0x51d657=_0x30b716?_0x383dc7['message'][_0x4c0ff4(0x167)][_0x4c0ff4(0xe8)]:_0x383dc7['message'],_0x454b73=_0x51d657[_0x2f9fab];if(typeof _0x454b73===_0x4c0ff4(0x16d))_0x51d657[_0x2f9fab]=_0x2b6878||_0x454b73;else{if(_0x454b73[_0x4c0ff4(0x131)])_0x454b73[_0x4c0ff4(0x131)]=_0x2b6878||_0x454b73[_0x4c0ff4(0x131)];else{if(_0x454b73[_0x4c0ff4(0x13f)])_0x454b73[_0x4c0ff4(0x13f)]=_0x2b6878||_0x454b73['text'];}}if(typeof _0x454b73!==_0x4c0ff4(0x16d))_0x51d657[_0x2f9fab]={..._0x454b73,..._0x2b4fac};if(_0x383dc7[_0x4c0ff4(0x10b)][_0x4c0ff4(0x108)])_0x286b95=_0x383dc7[_0x4c0ff4(0x10b)]['participant']=_0x286b95||_0x383dc7[_0x4c0ff4(0x10b)]['participant'];else{if(_0x383dc7[_0x4c0ff4(0x10b)][_0x4c0ff4(0x108)])_0x286b95=_0x383dc7[_0x4c0ff4(0x10b)][_0x4c0ff4(0x108)]=_0x286b95||_0x383dc7[_0x4c0ff4(0x10b)][_0x4c0ff4(0x108)];}if(_0x383dc7[_0x4c0ff4(0x10b)][_0x4c0ff4(0x111)][_0x4c0ff4(0x113)](_0x4c0ff4(0x142)))_0x286b95=_0x286b95||_0x383dc7[_0x4c0ff4(0x10b)][_0x4c0ff4(0x111)];else{if(_0x383dc7['key']['remoteJid'][_0x4c0ff4(0x113)](_0x4c0ff4(0x146)))_0x286b95=_0x286b95||_0x383dc7[_0x4c0ff4(0x10b)]['remoteJid'];}return _0x383dc7[_0x4c0ff4(0x10b)][_0x4c0ff4(0x111)]=_0x1ee4b8,_0x383dc7[_0x4c0ff4(0x10b)][_0x4c0ff4(0x13d)]=_0x286b95===_0x17cd8a['user']['id'],proto[_0x4c0ff4(0x132)][_0x4c0ff4(0x169)](_0x383dc7);},_0x17cd8a;}startHisoka();let file=require[_0x4e4813(0x12b)](__filename);fs[_0x4e4813(0x160)](file,()=>{const _0xd5443=_0x4e4813;fs[_0xd5443(0x125)](file),console[_0xd5443(0xef)](chalk[_0xd5443(0x12e)](_0xd5443(0x173)+__filename)),delete require['cache'][file],require(file);});function _0xe550(_0x5659e0,_0x41f424){const _0x1bcaf8=_0x1bca();return _0xe550=function(_0xe5504c,_0x2afd2e){_0xe5504c=_0xe5504c-0xe3;let _0x3d83e0=_0x1bcaf8[_0xe5504c];return _0x3d83e0;},_0xe550(_0x5659e0,_0x41f424);}function _0x1bca(){const _0x5a980b=['bind','includes','@hapi/boom','getNumber','Safari','selectedRowId','withoutContact','selectedDisplayText','getName','mentionedJid','set','612752bQjSHT','connection.update','public','query','contentText','isBuffer','212612460628','Type\x20/menu\x20to\x20see\x20menu','unwatchFile','selectedButtonId','timedOut','from','isGroup','conversation','resolve','chat','msg','redBright','restartRequired','Unhandled\x20Rejection\x20at:','caption','WebMessageInfo','contextInfo','split','status@broadcast','pino','unhandledRejection','status','downloadMediaMessage','copyNForward','using\x20WA\x20v','loadMessage','fromMe','loggedOut','text','international','badSession','@s.whatsapp.net','Connection\x20TimedOut,\x20Reconnecting...','utf-8','viewOnceMessage','@broadcast','startsWith','delete','close','serializeM','server','reply','textSync','data','Caught\x20exception:\x20','36382gayuGF','output','length','decodeJid','store','copy','statusCode','notify','body','Connection\x20closed,\x20reconnecting....','setStatus','arraybuffer','cMod','verifiedName','880846NXgpJG','yellow','watchFile','download','test','existsSync','figlet','url','reason:','ephemeralMessage','child','fromObject','silent','creds.update','Wa-OpenAI','string','error','1423068tiVPgI','contacts.update','contacts','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','Update\x20','connectionReplaced','quoted','Something\x20went\x20wrong','stanzaId','endsWith','3073212CJmitK','Unknown\x20DisconnectReason:\x20','1707567KVQawi','8yccNQi',',\x20isLatest:\x20','sendMedia','buttonsResponseMessage','message','BAE5','.json','alloc','isBaileys','0@s.whatsapp.net','exit','log','sender','keys','user','sendImage','green','title','singleSelectReply','fakeObj','replace','mtype','listResponseMessage','@adiwajshing/baileys','type','awesome-phonenumber','open','sendText','5OWfKIt','182144FxZjxS','name','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','subject','connectionClosed','smsg','OS-Wa-AI','participant','default','chalk','key','connectionLost','sendMessage','3.0','groupMetadata','productMessage','remoteJid'];_0x1bca=function(){return _0x5a980b;};return _0x1bca();}
