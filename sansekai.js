const _0x426b64=_0x374f;function _0x12d6(){const _0x2766fd=['test','substring','extendedTextMessage','149556NQdxAo','createImage','createCompletion','groupMetadata','openai','Update\x20','replace','selectedButtonId','keyopenai','366710DuYkNG','cache','toLowerCase','3248763sqKMQQ','endsWith','startsWith','tidak\x20tersedia','broadcast','35wPEcPc','ai\x20+\x20text\x0adescription\x20:in\x20this\x20cmd\x20Write\x20any\x20question\x20and\x20I\x20will\x20try\x20to\x20answer\x20it.\x0a\x0aفي\x20هذا\x20الامر\x20اكتب\x20اي\x20سؤال\x20وسأحاول\x20الإجابة\x20عليه\x0a\x0afor\x20*DALL-E*\x0aCmd\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20','unwatchFile','split','477612zEucQa','398655JKuDUy','No\x20Name','dl\x20+\x20text\x0adescription\x20:in\x20this\x20cmd\x20write\x20What\x20do\x20you\x20want\x20me\x20to\x20draw\x20for\x20you?\x0a\x0aفي\x20هذا\x20الامر\x20اكتب\x20ماذا\x20تريد\x20ان\x20ارسم\x20لك؟\x0a\x0afollow😐\x20fb.com/oussama.bakrine','choices','message','[\x20ERROR\x20]','not\x20found','900748gunewJ','turquoise','shift','resolve','green','369fosLvv','*welcome\x20to\x20Whatsapp\x20Bot\x20OpenAI\x20❤️*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0afor\x20*ChatGPT*\x0aCmd\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20','help','From','@s.whatsapp.net','subject','6qevYFF','blueBright','sender','yellow','chalk','imageMessage','status','@adiwajshing/baileys','chat','paste\x20the\x20apiky\x20here','magenta','mtype','ಠ\x20೧\x20ಠ\x0a\x0aWrite\x20anything\x20and\x20I\x20will\x20try\x20to\x20draw\x20it\x0aاكتب\x20اي\x20شيء\x20وسوف\x20احاول\x20رسمه\x0a\x0afollow😐\x20fb.com/oussama.bakrine','redBright','errer\x20error\x20:','url','4538480lYWcND','log','length','reply','isGroup','bgRed','response','templateButtonReplyMessage','videoMessage','format','ai-img','text-davinci-003','512x512','isBaileys','command','black','selectedRowId','...','[\x20LOGS\x20]','listResponseMessage','./key.json','string','conversation','bgWhite','img','data','selectedId','user','join','text','trim','buttonsResponseMessage'];_0x12d6=function(){return _0x2766fd;};return _0x12d6();}(function(_0x321a9,_0x396372){const _0x45966a=_0x374f,_0x4dd5db=_0x321a9();while(!![]){try{const _0x47dc83=parseInt(_0x45966a(0x1ca))/0x1*(-parseInt(_0x45966a(0x1f2))/0x2)+parseInt(_0x45966a(0x1e0))/0x3+-parseInt(_0x45966a(0x1e7))/0x4+-parseInt(_0x45966a(0x1db))/0x5*(parseInt(_0x45966a(0x1df))/0x6)+parseInt(_0x45966a(0x1d6))/0x7+-parseInt(_0x45966a(0x202))/0x8+parseInt(_0x45966a(0x1ec))/0x9*(parseInt(_0x45966a(0x1d3))/0xa);if(_0x47dc83===_0x396372)break;else _0x4dd5db['push'](_0x4dd5db['shift']());}catch(_0x3ce2f0){_0x4dd5db['push'](_0x4dd5db['shift']());}}}(_0x12d6,0x49c2e));const {BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,proto,generateWAMessageContent,generateWAMessage,prepareWAMessageMedia,areJidsSameUser,getContentType}=require(_0x426b64(0x1f9)),fs=require('fs'),util=require('util'),chalk=require(_0x426b64(0x1f6)),{Configuration,OpenAIApi}=require(_0x426b64(0x1ce));let setting=require(_0x426b64(0x216));module['exports']=sansekai=async(_0x1c814b,_0x37bd52,_0x239a6e,_0x715feb)=>{const _0x15689a=_0x426b64;try{var _0x4fa7f1=_0x37bd52[_0x15689a(0x1fd)]===_0x15689a(0x218)?_0x37bd52[_0x15689a(0x1e4)][_0x15689a(0x218)]:_0x37bd52[_0x15689a(0x1fd)]=='imageMessage'?_0x37bd52[_0x15689a(0x1e4)][_0x15689a(0x1f7)]['caption']:_0x37bd52[_0x15689a(0x1fd)]=='videoMessage'?_0x37bd52[_0x15689a(0x1e4)][_0x15689a(0x20a)]['caption']:_0x37bd52['mtype']==_0x15689a(0x1c9)?_0x37bd52['message']['extendedTextMessage']['text']:_0x37bd52['mtype']==_0x15689a(0x1c6)?_0x37bd52[_0x15689a(0x1e4)]['buttonsResponseMessage'][_0x15689a(0x1d1)]:_0x37bd52[_0x15689a(0x1fd)]==_0x15689a(0x215)?_0x37bd52[_0x15689a(0x1e4)]['listResponseMessage']['singleSelectReply'][_0x15689a(0x212)]:_0x37bd52[_0x15689a(0x1fd)]==_0x15689a(0x209)?_0x37bd52[_0x15689a(0x1e4)][_0x15689a(0x209)][_0x15689a(0x21c)]:_0x37bd52[_0x15689a(0x1fd)]==='messageContextInfo'?_0x37bd52[_0x15689a(0x1e4)][_0x15689a(0x1c6)]?.[_0x15689a(0x1d1)]||_0x37bd52['message'][_0x15689a(0x215)]?.['singleSelectReply'][_0x15689a(0x212)]||_0x37bd52[_0x15689a(0x1c4)]:'',_0x1b1287=typeof _0x37bd52[_0x15689a(0x1c4)]==_0x15689a(0x217)?_0x37bd52[_0x15689a(0x1c4)]:'',_0x5628d7=/^[\\/!#.]/gi[_0x15689a(0x1c7)](_0x4fa7f1)?_0x4fa7f1['match'](/^[\\/!#.]/gi):'';const _0x488a3f=_0x4fa7f1[_0x15689a(0x1d8)](_0x5628d7),_0x3515b2=_0x4fa7f1[_0x15689a(0x1d0)](_0x5628d7,'')[_0x15689a(0x1c5)]()[_0x15689a(0x1de)](/ +/)[_0x15689a(0x1e9)]()[_0x15689a(0x1d5)](),_0xb36fff=_0x4fa7f1[_0x15689a(0x1c5)]()[_0x15689a(0x1de)](/ +/)['slice'](0x1),_0x58d410=_0x37bd52['pushName']||_0x15689a(0x1e1),_0x3177bd=await _0x1c814b['decodeJid'](_0x1c814b[_0x15689a(0x1c2)]['id']),_0x5b174b=_0x37bd52['sender']==_0x3177bd?!![]:![];let _0x50f930=q=_0xb36fff[_0x15689a(0x1c3)]('\x20');const _0x3f155d=_0x1b1287[_0x15689a(0x1c5)]()[_0x15689a(0x1c8)](_0x1b1287['indexOf']('\x20')+0x1),_0x2eb648=_0x3f155d[_0x15689a(0x1c5)]()[_0x15689a(0x1c8)](_0x3f155d['indexOf']('\x20')+0x1),_0x4ddf3b=_0x37bd52[_0x15689a(0x1fa)],_0x25d15a=_0x37bd52['reply'],_0x139963=_0x37bd52[_0x15689a(0x1f4)],_0x3b7bc7=_0x239a6e['messages'][0x0],_0x5edd80=(_0x252f46,_0x154ef4)=>{return!_0x154ef4?chalk['green'](_0x252f46):chalk['keyword'](_0x154ef4)(_0x252f46);},_0x2644f1=_0x37bd52[_0x15689a(0x206)]?await _0x1c814b[_0x15689a(0x1cd)](_0x37bd52[_0x15689a(0x1fa)])['catch'](_0x1df8ee=>{}):'',_0x107bb2=_0x37bd52[_0x15689a(0x206)]?_0x2644f1[_0x15689a(0x1f1)]:'';let _0x5a316a=_0x1b1287[_0x15689a(0x204)]>0x1e?q[_0x15689a(0x1c8)](0x0,0x1e)+_0x15689a(0x213):_0x1b1287;if(_0x488a3f&&!_0x37bd52[_0x15689a(0x206)])console[_0x15689a(0x203)](chalk[_0x15689a(0x211)](chalk['bgWhite'](_0x15689a(0x214))),_0x5edd80(_0x5a316a,_0x15689a(0x1e8)),chalk[_0x15689a(0x1fc)]('From'),chalk[_0x15689a(0x1eb)](_0x58d410),chalk[_0x15689a(0x1f5)]('[\x20'+_0x37bd52[_0x15689a(0x1f4)][_0x15689a(0x1d0)](_0x15689a(0x1f0),'')+'\x20]'));else _0x488a3f&&_0x37bd52[_0x15689a(0x206)]&&console[_0x15689a(0x203)](chalk[_0x15689a(0x211)](chalk[_0x15689a(0x219)]('[\x20LOGS\x20]')),_0x5edd80(_0x5a316a,_0x15689a(0x1e8)),chalk[_0x15689a(0x1fc)](_0x15689a(0x1ef)),chalk[_0x15689a(0x1eb)](_0x58d410),chalk['yellow']('[\x20'+_0x37bd52[_0x15689a(0x1f4)]['replace'](_0x15689a(0x1f0),'')+'\x20]'),chalk[_0x15689a(0x1f3)]('IN'),chalk['green'](_0x107bb2));if(_0x488a3f)switch(_0x3515b2){case _0x15689a(0x1ee):case'menu':_0x37bd52[_0x15689a(0x205)](_0x15689a(0x1ed)+_0x5628d7+_0x15689a(0x1dc)+_0x5628d7+_0x15689a(0x1e2));break;case'ai':case _0x15689a(0x1ce):try{if(setting[_0x15689a(0x1d2)]===_0x15689a(0x1fb))return _0x25d15a('\x20complete\x20•_•\x20\x0a\x0apast\x20apiky\x20in\x20file\x20key.json\x0a\x0ayou\x20can\x20get\x20apiky\x20in:\x20https://beta.openai.com/account/api-keys');if(!_0x50f930)return _0x25d15a('ಠ\x20೧\x20ಠ\x20\x0a\x0a\x20•write\x20your\x20questions\x20and\x20I\x20will\x20try\x20to\x20answer\x20it\x0a\x0a\x20اكتب\x20سؤالك\x20وسوف\x20احاول\x20الاجابة\x20عليه\x0a\x0afollow😐:fb.com/oussama.bakrine');const _0x280212=new Configuration({'apiKey':setting[_0x15689a(0x1d2)]}),_0x14fc84=new OpenAIApi(_0x280212),_0x3c80d1=await _0x14fc84[_0x15689a(0x1cc)]({'model':_0x15689a(0x20d),'prompt':_0x50f930,'temperature':0.3,'max_tokens':0x7d0,'top_p':0x1,'frequency_penalty':0x0,'presence_penalty':0x0});_0x37bd52[_0x15689a(0x205)](''+_0x3c80d1[_0x15689a(0x21b)][_0x15689a(0x1e3)][0x0][_0x15689a(0x1c4)]);}catch(_0x5d8514){_0x5d8514[_0x15689a(0x208)]?(console[_0x15689a(0x203)](_0x5d8514[_0x15689a(0x208)][_0x15689a(0x1f8)]),console[_0x15689a(0x203)](_0x5d8514['response']['data']),console[_0x15689a(0x203)](_0x5d8514[_0x15689a(0x208)][_0x15689a(0x1f8)]+'\x0a\x0a'+_0x5d8514[_0x15689a(0x208)][_0x15689a(0x21b)])):(console[_0x15689a(0x203)](_0x5d8514),_0x37bd52[_0x15689a(0x205)]('errer\x20error\x20:'+_0x5d8514[_0x15689a(0x1e4)]));}break;case _0x15689a(0x21a):case _0x15689a(0x20c):case'image':case'dl':try{if(setting[_0x15689a(0x1d2)]==='put\x20apiky\x20here')return _0x25d15a('paste\x20the\x20api\x20in\x20file\x20key.json\x0a\x0a\x20You\x20can\x20get\x20the\x20apiky\x20from\x20here:\x20https://beta.openai.com/account/api-keys');if(!_0x50f930)return _0x25d15a(_0x15689a(0x1fe));const _0x2c49e9=new Configuration({'apiKey':setting[_0x15689a(0x1d2)]}),_0x5e8f76=new OpenAIApi(_0x2c49e9),_0x1a49b8=await _0x5e8f76[_0x15689a(0x1cb)]({'prompt':_0x50f930,'n':0x1,'size':_0x15689a(0x20e)});_0x1c814b['sendImage'](_0x4ddf3b,_0x1a49b8[_0x15689a(0x21b)][_0x15689a(0x21b)][0x0][_0x15689a(0x201)],_0x50f930,_0x3b7bc7);}catch(_0x41d4b7){_0x41d4b7['response']?(console['log'](_0x41d4b7[_0x15689a(0x208)][_0x15689a(0x1f8)]),console[_0x15689a(0x203)](_0x41d4b7[_0x15689a(0x208)][_0x15689a(0x21b)]),console[_0x15689a(0x203)](_0x41d4b7['response'][_0x15689a(0x1f8)]+'\x0a\x0a'+_0x41d4b7['response'][_0x15689a(0x21b)])):(console['log'](_0x41d4b7),_0x37bd52[_0x15689a(0x205)](_0x15689a(0x200)+_0x41d4b7[_0x15689a(0x1e4)]));}break;default:{if(_0x488a3f&&_0x1b1287[_0x15689a(0x1d5)]()!=undefined){if(_0x37bd52[_0x15689a(0x1fa)][_0x15689a(0x1d7)](_0x15689a(0x1da)))return;if(_0x37bd52[_0x15689a(0x20f)])return;if(!_0x1b1287[_0x15689a(0x1d5)]())return;if(_0x5a316a||_0x488a3f&&!_0x37bd52['isGroup'])console[_0x15689a(0x203)](chalk[_0x15689a(0x211)](chalk['bgRed']('[\x20ERROR\x20]')),_0x5edd80(_0x15689a(0x210),'turquoise'),_0x5edd80(''+_0x5628d7+_0x3515b2,_0x15689a(0x1e8)),_0x5edd80(_0x15689a(0x1d9),_0x15689a(0x1e8)));else(_0x5a316a||_0x488a3f&&_0x37bd52[_0x15689a(0x206)])&&console[_0x15689a(0x203)](chalk['black'](chalk[_0x15689a(0x207)](_0x15689a(0x1e5))),_0x5edd80(_0x15689a(0x210),_0x15689a(0x1e8)),_0x5edd80(''+_0x5628d7+_0x3515b2,_0x15689a(0x1e8)),_0x5edd80(_0x15689a(0x1e6),_0x15689a(0x1e8)));}}}}catch(_0x452caa){_0x37bd52[_0x15689a(0x205)](util[_0x15689a(0x20b)](_0x452caa));}};function _0x374f(_0x4b6350,_0x137e91){const _0x12d67a=_0x12d6();return _0x374f=function(_0x374f74,_0x89e4b6){_0x374f74=_0x374f74-0x1c2;let _0x42f83e=_0x12d67a[_0x374f74];return _0x42f83e;},_0x374f(_0x4b6350,_0x137e91);}let file=require[_0x426b64(0x1ea)](__filename);fs['watchFile'](file,()=>{const _0x2d8087=_0x426b64;fs[_0x2d8087(0x1dd)](file),console['log'](chalk[_0x2d8087(0x1ff)](_0x2d8087(0x1cf)+__filename)),delete require[_0x2d8087(0x1d4)][file],require(file);});
