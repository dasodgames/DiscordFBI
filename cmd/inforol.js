exports.run = (client, message, args) => {
const Discord = require('discord.js')  


 if (message.author.id !== "579234820408868872")
if (message.author.id !== "571391532033376276")
if (message.author.id !== "471035482789118004") return
  


let pika= ["579234820408868872", "571391532033376276", "471035482789118004"]
  
  
  
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

    
    if (!role) role = message.member.highestRole;


  
    const embed = new Discord.RichEmbed()
        .setColor(0x36393E)
        .setTitle("Rol:", role.name, true)
        .addField('ID', role.id, true)
        .setFooter("Usa brigade!addrole <id> para darte el rol")
    return message.channel.send({
        embed: embed
    });
}