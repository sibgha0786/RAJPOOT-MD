const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1KeWtRUDdqUGRueTdvR2pJNWN5UFVsUEhsbmNPcFBiWHhjK2pYVlVuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTZ3Q2l6N24yK09peHlpaGEwa0tzWVJEbG42UGZKVTYvRTlTdjIzemtYYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQTY3cm8xZXUyL3lyTjFXRnMrYUMxQ1IxdlBUeWUwVTlrY1hYZFp4clhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHZnYwdEU0YXRRdmdoUE93Q3k2cjdadDJvWHF3bWZqcmZFUGtYZ3RxTXdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJVlBIY2Q3RWIyc2ZYV0RxK0w2Q1JPNTArSmwrbWthOTF5bEZaTktJMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1ud2hBRHB6amxvM2tjVWZISm9LY0VUU2JLOGU3bnVCcDR4VUdGMXZRWHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE96dGxZa1gwT1oxdkhkQXNLSUhHaXlSblBBU1grdGozbEtRbmVyUHFXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9hb1VUdzhCOGllRGRUSXFUYVJwazJJcWVYY085UWwvMURRajByQnV4ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ3bEhZdVlyU2FDc3lEWDNBa0N5SzJiaTJQZVQrRnVVR2ZNVlpnTDhDeVRhVm1XTmQ3eUhXQ2tlTFB4d3pnMmxXQTM3a3FkZmtPTDRjV0hSOXBVcGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJhM0Rpc3krVDZSakx2eDRDTmpqSWxFWEptR1NjMlZ5NzE3SVVFckVGNlpNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJUOVNHTDY1UiIsIm1lIjp7ImlkIjoiOTIzMjgwMzU1NjYwOjQwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMzgzMjQ0Nzk3ODMxMTM6NDBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMjhvQ1VRNGNIS3hRWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiNXkzclRValJFakl2cGFsazVhZU9sSlpuZUdjOHBHbWt0N3lvUGJEc2c0PSIsImFjY291bnRTaWduYXR1cmUiOiJiQ2ZWNjBaN0tBdjY5cklBRjVYaTUwN2YyMHE1OHJmYW0xVWt2ZU9SMVlRbVVaMTZBMnpPOWtYRTVrcEo0UC9SaWk4MTF5ZDVMTEkwYkJZUy9YWXdBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY3RKMUx2T0h3Q1NrV0I2cWxrSHJ4TDJTOFQwYm5ZUnFvbzd6UXhIZDRwamNjYWNoMVpGdzBBaitOUjcvNmNzKzcxRlNjTGw1NEpDb2tjS0MybUp3akE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyODAzNTU2NjA6NDBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVytjdDYwMUkwUkl5TDZXcFpPV25qcFNXWjNoblBLUnBwTGU4cUQydzdJTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NTM3MDYwLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVoYyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝗥𝗔𝗝𝗣𝗢𝗢𝗧-𝗠𝗗 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/tPk2kjqK/temp.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "RAJPOOT-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "RAJPOOT-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923280355660",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*RAJPOOT-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝗥𝗔𝗝𝗣𝗢𝗢𝗧-𝗠𝗗 ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tPk2kjqK/temp.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923213509846",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
