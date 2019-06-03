const MegaClient = require("simple-discord");
 
module.exports = new MegaClient.Comando({
  nombre: "help",
  alias: ["ayuda"],
  descripcion: "Te muestra toda la lista de comandos.",
  cooldown: 3,
  permiso_cooldown: "ADMINISTRATOR",
  ejecutar: (client, message, args) => {
 
   if(client.comandos.size <= 0) return message.channel.send("No hay comandos") //de todos modos por si ocurre algo.

const embed = new MegaClient.RichEmbed()
.setTitle("Comandos de Brigade Discord")
.setDescription("El Prefix de **Brigade Discord** es **brigade!** (Customizable).")
.addField("Moderación", "`soft-ban , ban , kick , hackban , unban , warn, clear`")
.addField(" Información", "`serverinfo , user, avatar`")
.addField(" Administración", "`setprefix`")
.addField(" Desarrollador", "`reload`")
.addField(" Si tienes dudas únete a nuestro servidor","[POR DETERMINAR]")
.addField(" Desarrolladores/Developers :", "<@579234820408868872>")
.setColor("f1c40f")
.setFooter(message.author.username, message.author.avatarURL)
message.channel.send(embed)

 
  }
 
})