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
    if (message.content === prefix + 'info') {

        message.channel.send({embed: {
  color: 0xff0000,
 
  description: "Hey Its Me CircruitCPU - FSxAlpha's Brother"
}});
      }  
});

//Command +help
client.on('message', message => {
    if (message.content === prefix + 'help') {

        message.channel.send({embed: {
  color: 0xff0000,
  
  description: "CMDs : ..help / ..yt / ..invite / ..donate / ..support"

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

  description: "Wanna invite me to your Server? - "
}});

      }  
});

//Command +donate
client.on('message', message => {
    if (message.content === prefix + 'donate') {

        message.channel.send({embed: {
  color: 0xff0000,
  
  description: "If you wanna Donate for faster Coding - Donate to This PayPal [ pkgrou9@gmail.com]"
}});
      }
});

//Command +support
client.on('message', message => {
    if (message.content === prefix + 'support') {

        message.channel.send({embed: {
  color: 0xff0000,
 
  description: "Wanna join my Support Discord Server? - https://discord.gg/GnUczTb'"
}});
      }
});


    static void UpdatePresence()
    {
        DiscordRichPresence discordPresence;
        memset(&discordPresence, 0, sizeof(discordPresence));
        discordPresence.state = "Reactiong On Commands";
        discordPresence.details = "Creator : @Microsoft";
        discordPresence.largeImageText = "Version 1.4";
        Discord_UpdatePresence(&discordPresence);
    }

client.login(process.env.BOT_TOKEN);
