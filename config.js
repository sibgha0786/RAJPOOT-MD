const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "RAJPOOT-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVVVGVWcFZDeHZKdVZvTkdjZmNQZWlwd05ocE9MWERQRVR0bzJxeEcyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmkya014U01malZVWEFVYXBralN0SEFscmk3UEhTdHAvdXBoeld2MHcyYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ2FkUWlQaFd3czFaaWxpUWVERDZLMjVFeHhJRFZsU1htcVNjcm9LYzFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0aXFJZGpwcDdKKzU2ZHpQMk1nYUZBaGZxS2d2WVl2S3VyMUhDcTU5bUVjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPdHR3RmxnMXNRY2sva2k5UUZiNkdFSGNiaEhxWG4wK2duM214dDBpSFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGS0d4aEtNT1FuOEdNSDlxQ3lPSFplb2thaU9GVWhBZS9wY0RnN3dkM2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05Ra3U1aEphemJReTBUV1ZDcXhmQmIxRWd2cHJhNzBHRk1GeXhnTnZsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaElvWWFtNXZQQmM0bEdtNnpBRVhueTdESDNVMk5TWGIySVBnbk5NbE1GUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlLS0ZPQ2krVGxTQSt1OVY0ZUFFQTZTaU92bWZWczBTWndjaFRZUjdnOHpOTTNXTVlnVFFVUFdpVUFpZnRpNHM2SDF1V3paZVRNaE4xeFZ4dWdCZ2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6Ik5lM25xZUlEVExsVlhLYjgyang1K2FqWFpHcHZvSHZ5NFBuYm91T215RGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkNDNkRIQlIxIiwibWUiOnsiaWQiOiI5MjMyODAzNTU2NjA6MzhAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIzODMyNDQ3OTc4MzExMzozOEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p5OG9DVVErOTNCeFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImI1eTNyVFVqUkVqSXZwYWxrNWFlT2xKWm5lR2M4cEdta3Q3eW9QYkRzZzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5aYmFuclk1MVNrcHZUSzhiSEMwRUhxejY5dEhvVlVhK2hHdlNYS25jcEptQTlyeUZxeGluNk11V2RoK2FBQTlQZWtqM0l5OThkRXJGenJBQVdjNURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYZ09nWEUxUHBKSmxKTklUbjFTYkFaSXlSVGtPMW5MWDdJOExHdUc2WWJub05XVlpoWjlRcmVyMG1KL1AyWUpGMnVYMjZCWnBWZDJGVDNFQU5QS1NpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI4MDM1NTY2MDozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXK2N0NjAxSTBSSXlMNldwWk9XbmpwU1daM2huUEtScHBMZThxRDJ3N0lPIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYzOTMyMTQsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9",
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
