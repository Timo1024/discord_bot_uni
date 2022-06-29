const config = require('./config.json');

module.exports = {

   // Omega Hilfe embed (zeigt alle Commands an, die jeder benutzen kann)
  "omega": (message, Discord) => {
    const omega = new Discord.MessageEmbed()
    .setColor('#496ae0')
    .setTitle('Omegas Commands:')
    .addFields(
       { name: 'Startet die magische Miesmuschel', value: '`'                  + config.prefix.char + config.miesmuschel.command +' <deine Frage>?`' },
       { name: 'Eine Abstimmung starten', value: '`'                           + config.prefix.char + config.abstimmung +' <ja/ne> <ja/ne> <ja/ne> <your question>`' },
       { name: 'Gibt Informationen über einen User aus', value: '`'            + config.prefix.char + config.user.info[0] +' <mention user>`'}
    )
    message.channel.send(omega);
  }
}
