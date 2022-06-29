const config = require('./config.json');

module.exports = {

   // Omega Hilfe embed (zeigt alle Commands an, die jeder benutzen kann)
  "omega": (message, Discord) => {
    const omega = new Discord.MessageEmbed()
    .setColor('#496ae0')
    .setTitle('Omegas Commands:')
    .addFields(
       { name: 'Eine Abstimmung starten', value: '`'                              + config.prefix.char + config.abstimmung +' <ja/ne> <ja/ne> <ja/ne> <your question>`' },
       { name: 'Gibt Informationen über einen User aus', value: '`'               + config.prefix.char + config.user.info[0] +' <mention user>`'},
       { name: 'Fängt meta-t-t-t an', value: '`'                                  + config.prefix.char + config.ttt.command[0] +'`'},
       { name: 'lässt ein embed erstellen (für Hilfe: `.help embed`)', value: '`' + config.prefix.char + config.embed[0] +'`'}
    )
    message.channel.send(omega);
  },

  // help embed for how to create own embed
  "embed_help": (message, Discord) => {
    const embed = new Discord.MessageEmbed()
       .setColor('#496ae0')
       .setTitle('⛄   Command: '+ config.prefix.char + config.embed[0] +'   ⛄')
       .addFields(
          { name: 'Wichitge Hinweise', value: 'Mit diesem command könnt ihr euer eigenes Embed erstellen. Der Command startet immer mit `'+ config.prefix.char + config.embed[0] +'`. Man benötigt danach mindestens sechs Argumente. Diese werden jeweils in eine Seperate Zeile geschrieben. Wenn man ein Argument weglassen möchte, also kein Text an dieser Stelle stehen soll, dann lässt man dort einfach eine Leerzeile. Es muss mindestens ein Feld mit Titel und Inhalt eingefügt werden. Und der Inhalt des letzten Felds darf keine Leerzeile sein.' },
          { name: 'Syntax', value: "```"+ config.prefix.char + config.embed[0] +" \n<hex code color> \n<title> \n<footer> \n<title 1. field> \n<content 1. field> \n...```"}
       )
    message.channel.send(embed);
 },
}
