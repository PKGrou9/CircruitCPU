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
    	message.reply('YT Official :  https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw');
  	}  

if (message.author.bot) return;
if (message.channel.type !== 'text') {
    let active = await db.fetch(`support_${message.author.id}`);
    let guild = client.guilds.get(serverStats.guildID);
    let channel, found = true;
    try {
        if (active) client.channels.get(active.channelID)
            .guild;
    } catch (e) {
        found = false;
    }
    if (!active || !found) {
        active = {};
        channel = await guild.channels.create(`${message.author.username}-${message.author.discriminator}`, {
            parent: serverStats.ticketCategoryID,
            topic: `!complete to close the ticket | Support for ${message.author.tag} | ID: ${message.author.id}`
        });
        let author = message.author;
        const newChannel = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(author.tag, author.displayAvatarURL())
            .setFooter('Support Ticket Created!')
            .addField('User', author)
            .addField('ID', author.id)
        await channel.send(newChannel);
        const newTicket = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Hello, ${author.username}`, author.displayAvatarURL())
            .setFooter('Support Ticket Created!')
        await author.send(newTicket);
        active.channelID = channel.id;
        active.targetID = author.id;
    }
    channel = client.channels.get(active.channelID);
    const dm = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Thank you, ${message.author.username}`, message.author.displayAvatarURL())
        .setFooter(`Your message has been sent - A staff member will be in contact soon.`)
    await message.author.send(dm);
    if (message.content === '!complete') return;
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(message.content)
        .setFooter(`Message Received - ${message.author.tag}`)
    await channel.send(embed);
    db.set(`support_${message.author.id}`, active);
    db.set(`supportChannel_${channel.id}`, message.author.id);
    return;
}
let support = await db.fetch(`supportChannel_${message.channel.id}`);
if (support) {
    support = await db.fetch(`support_${support}`);
    let supportUser = client.users.get(support.targetID);
    if (!supportUser) return message.channel.delete();
    if (message.content.toLowerCase() === '!complete') {
        const complete = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Hey, ${supportUser.tag}`, supportUser.displayAvatarURL())
            .setFooter('Ticket Closed -- Guild Name Here')
            .setDescription('*Your ticket has been marked as complete. If you wish to reopen it, or create a new one, please send a message to the bot.*')
        supportUser.send(complete);
        message.channel.delete();
        db.delete(`support_${support.targetID}`);
        let inEmbed = new Discord.MessageEmbed()
            .setTitle('Ticket Closed!')
            .addField('Support User', `${supportUser.tag}`)
            .addField('Closer', message.author.tag)
            .setColor('RANDOM')
        const staffChannel = client.channels.get('454616220382265346');
        staffChannel.send(inEmbed);
    }
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setFooter(`Message Received - Alpha Development`)
        .setDescription(message.content)
    client.users.get(support.targetID)
        .send(embed);
    message.delete({
        timeout: 10000
    });
    embed.setFooter(`Message Sent -- ${supportUser.tag}`)
        .setDescription(message.content);
    return message.channel.send(embed);
}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
