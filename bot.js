const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '..help') {
    	message.reply('PONG - My Commands are:
                      ..patches
                      ..yt
                      More will come i a few Updates!
                      Bot Creator:Windows97
                      Bot Co-Creator:FSxOmega');
  	}
});

client.on('message', message => {
    if (message.content === '..patches') {
    	message.reply('PONG - None found in Cloud');
  	}
});

client.on('message', message => {
    if (message.content === '..yt') {
    	message.reply('PONG - https://m.youtube.com/channel/UCf2BRnCkA7do5wvKgwtAAhg');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
