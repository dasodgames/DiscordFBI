const MegaClient = require("simple-discord");
 
module.exports = new MegaClient.Comando({
  nombre: "dragono",
  alias: ["dragono"],
  descripcion: "Easter-egg2",
  cooldown: 3,
  permiso_cooldown: "ADMINISTRATOR",
  ejecutar: (client, message, args) => {
 
   if(client.comandos.size <= 0) return message.channel.send("No hay comandos") //de todos modos por si ocurre algo.


message.channel.send("Pinche otako qliao, dúchate >:(, es broma, mejor ya mando a Dasod a que te vaya a mamar la verga :/")

 
  }
  
  })