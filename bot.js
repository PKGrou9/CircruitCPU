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


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
client.setGame(process.env.SET_GAME);
