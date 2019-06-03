const MegaClient = require("simple-discord");
 
module.exports = new MegaClient.Comando({
  nombre: "Dasher",
  alias: ["Dasher"],
  descripcion: "Easter-egg2",
  cooldown: 3,
  permiso_cooldown: "ADMINISTRATOR",
  ejecutar: (client, message, args) => {
 
   if(client.comandos.size <= 0) return message.channel.send("No hay comandos") //de todos modos por si ocurre algo.


message.channel.send("Por lo que he visto roko ahora es un putito **emoji de pepo pensativo**, todos te queremos Dasher y aunque Dasod sea puto y no me deje decir esto... Dasod quiere mamarte la verga OWO")

 
  }
  
  })