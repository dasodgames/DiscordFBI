exports.run = (client, message, args) => {
const Discord = require('discord.js')  


  if (message.author.id !== "579234820408868872")
if (message.author.id !== "571391532033376276")
if (message.author.id !== "471035482789118004") return

let pika= ["579234820408868872", "571391532033376276", "471035482789118004"]

let id1 = args[0]  

if(isNaN(id1)) return message.channel.send("Pon una ID valida")
message.member.addRole(id1)

}

  
