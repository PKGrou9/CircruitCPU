const Discord = require('discord.js');
const client = new Discord.Client();
//This is the Bot-Prefix
const prefix = '..';

//Bot on Ready
client.on('ready', () => {
    console.log('Bot Launched!:D');
});

//Command +info
client.on('message', message => {
    if (message.content === prefix + 'patches') {

        message.channel.send({embed: {
  color: 0xff0000,
 
  description: "PONG - New Prefix:[..]// Bug Fixes PONG - New Prefix [..] / New CMD - ..donate / donate and help my programmation !"
}});
      }  
});

//Command +help
client.on('message', message => {
    if (message.content === prefix + 'help') {

        message.channel.send({embed: {
  color: 0xff0000,
  
  description: "Ok Sure Here - CMDs : / ..help / ..donate / ..yt / ..patches / Other : / Nan Err - EExx /"

}});
      }  
});

//Command +yt
client.on('message', message => {
    if (message.content === prefix + 'yt') {

        message.channel.send({embed: {
  color: 0xff0000,
 
  description: "YouTube : https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw"
}});
      }  
});

//Command +invite
client.on('message', message => {
    if (message.content === prefix + 'invite') {
        message.channel.send({embed: {
  color: 0xff0000,

  description: "My Invite Link - https://discordapp.com/api/oauth2/authorize?client_id=461174799599927297&permissions=0&scope=bot"
}});

      }  
});

//Command +donate
client.on('message', message => {
    if (message.content === prefix + 'donate') {

        message.channel.send({embed: {
  color: 0xf0000
  
  description: "If you wanna Donate for faster Coding - paypal.me/fsxalpha"If you Wanna Donate to Help My Programmation : PayPal [ pkgrou9@gmail.com ] Donate to this E-Mail!"

}});
      }
});

//This must be this way
client.login(process.env.BOT_TOKEN);
