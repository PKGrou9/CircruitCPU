const Discord = require('discord.js');
const client = new Discord.Client();

//If the bot is Ready (in Console)
client.on('ready', () => {
    console.log('Booted...');
});

client.on('message', message => {
    if (message.content === '..patches') {
        message.channel.send({embed: {
        color: 0xff0000,
        description : "PONG - New Prefix [..] / New CMD - ..donate / donate and help my programmation !"
  	}});
});

client.on('message', message => {
    if (message.content === '..help') {
        message.channel.send({embed: {
        color: 0xff0000,
        description: "Ok Sure Here - CMDs : / ..help / ..donate / ..yt / ..patches / Other : / Nan Err - EExx /"
  	}});
});

client.on('message', message => {
    if (message.content === '..yt') {
        message.channel.send({embed: {
        color: 0xff0000,
        description: "YT Official :  https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw"
  	}});
});

client.on('message', message => {
    if (message.content === '..donate') {
        message.channel.send({embed: {
        color: 0xff0000,
    	description: "If you Wanna Donate to Help My Programmation : PayPal [ pkgrou9@gmail.com ] Donate to this E-Mail!"
  	}});
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
