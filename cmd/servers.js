exports.run = (client, message, args) => {
const Discord = require('discord.js')  

const ownerID = "579234820408868872";
  
 if (message.author.id !== "579234820408868872")
if (message.author.id !== "571391532033376276")
if (message.author.id !== "471035482789118004") return
  let string = '';

  client.guilds.forEach(guild => {
    string += 'Nombre del servidor: ' + guild.name + '\n' + 'ID del servidor: ' + guild.id + '  ' + '\n\n';

  })

  
  message.channel.send("```"+string+"```");

}
