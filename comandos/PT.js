const MegaClient = require("simple-discord");
 
module.exports = new MegaClient.Comando({
  nombre: "PT",
  alias: ["PT"],
  descripcion: "Easter-egg2",
  cooldown: 3,
  permiso_cooldown: "ADMINISTRATOR",
  ejecutar: (client, message, args) => {
 
   if(client.comandos.size <= 0) return message.channel.send("No hay comandos") //de todos modos por si ocurre algo.


message.channel.send("PT es el mejor joto de este planeta, y aunque mi desarrollador no haya permitido que diga esto... Dasod te ama uwu")

 
  }
  
  })