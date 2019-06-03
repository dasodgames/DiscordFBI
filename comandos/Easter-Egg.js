const MegaClient = require("simple-discord");
 
module.exports = new MegaClient.Comando({
  nombre: "rexxor",
  alias: ["rexxor"],
  descripcion: "Easter-egg",
  cooldown: 3,
  permiso_cooldown: "ADMINISTRATOR",
  ejecutar: (client, message, args) => {
 
   if(client.comandos.size <= 0) return message.channel.send("No hay comandos") //de todos modos por si ocurre algo.

const embed = new MegaClient.RichEmbed()
.setTitle("Por y para rexxor")
.setDescription("Esto va dedicado a rexxor")
.addField("Siempre te recordaremos", "`Rexxor is backing... en una cuenta diferente. UlтяαVoятex#7558`")
.setColor("#ff5722")
.setFooter(message.author.username, message.author.avatarURL)
message.channel.send(embed)

 
  }
  
  })