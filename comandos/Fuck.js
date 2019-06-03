const MegaClient = require("simple-discord");
 
module.exports = new MegaClient.Comando({
  nombre: "fuck",
  alias: ["fuck"],
  descripcion: "Easter-egg2",
  cooldown: 3,
  permiso_cooldown: "ADMINISTRATOR",
  ejecutar: (client, message, args) => {
 
   if(client.comandos.size <= 0) return message.channel.send("No hay comandos") //de todos modos por si ocurre algo.


message.channel.send(" **Llama al FBI**                                           -Hola? Alguien está siendo un marrano :0")
 
  }
  
  })
