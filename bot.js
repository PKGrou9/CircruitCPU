const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Booted...');
});

client.on('message', message => {
    if (message.content === '..patches') {
    	message.reply('PONG - New Prefix [..] / New CMD - ..donate / donate and help my programmation !');
  	}  
});

client.on('message', message => {
    if (message.content === '..help') {
    	message.reply('Ok Sure Here - CMDs : / ..help / ..donate / ..yt / ..patches / Other : / Nan Err - EExx /');
  	}  
});

client.on('message', message => {
    if (message.content === '..yt') {
    	message.reply('YT Official :  https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw');
  	}
});

client.on('message', message => {
    if (message.content === '..donate') {
    	message.reply('if you Wanna Donate to Help My Programmation : PayPal [ pkgrou9@gmail.com ] Donate to this E-Mail / Invite Me https://discordapp.com/api/oauth2/authorize?client_id=461174799599927297&permissions=0&scope=bot');
  	}  
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
