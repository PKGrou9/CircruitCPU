const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '..patches') {
    	message.reply('PONG - New Prefix [..] / Bug Fixes / Soon ( ..yt CMD / Other CMDs');
  	}  
});

client.on('message', message => {
    if (message.content === '..help') {
    	message.reply('Ok Sure Here - Error : Code Unfinished Work ...');
  	}  
});

client.on('message', message => {
    if (message.content === '..yt') {
    	message.reply('YT Official : Error : No URL Found');
  	}  
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
