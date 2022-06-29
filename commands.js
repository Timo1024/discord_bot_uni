
var config = require('./config.json');

// returns true if hex e.a. #123456
function check_if_hex(hex){
  if(hex.slice(0,1) !== "#" || hex.length !== 7){
    return false;
  } else{
    const short = hex.slice(1);
    for(var i = 0; i < 6; i++){
      if(!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f"].includes(short.slice(i,i+1))){
        return false;
      }
    }
    return true;
  }
}

module.exports = {

  // gibt Infos über einen User aus
  "user": (message, Discord, client) => {
    var user = message.mentions.users.first();
    if(user == undefined){
      message.reply("`" + config.prefix.char + config.user.info[0] + " <mention user>`");
    } else {
      
      var this_user = client.users.cache.find(user2 => user2.id === user.id);
      var ea = this_user.createdAt.toString().split(" ");
      var et = ea[4].split(":");
      var erstellt_date = ea[2] + ". " + ea[1] + " " + ea[3] + " um " + et[0] + ":" + et[1] + " Uhr";
      
      var guild = client.guilds.cache.get("911960408011714610")


      const user_new = message.mentions.users.first() || message.author;
      const member = message.mentions.members.first() || message.member;

      if(member.nickname == null){
        user_nickname = "-";
      }else{
        user_nickname = member.nickname;
      }

      if(member._roles[0] == undefined){
        user_roles = "-"
      } else {
        user_roles = member._roles.map(r => guild.roles.cache.find(role => role.id === r).name).join(' | ')
      }
      
      let embed = new Discord.MessageEmbed()
        .setAuthor(user_new.username)
        .setThumbnail(this_user.avatarURL())
        .setDescription("-----------------------------------------------------------")
        .setColor("#64FF00", true)
        .addField("Full Username:", user_new.tag , true)
        .addField("Nickname:", user_nickname , true)
        .addField("ID:", user_new.id, false)
        .addField("Created at:", erstellt_date, true)
        .addField("Roles", user_roles, true);
      
      message.channel.send(embed);
    }
  },

  // let omega send a message
  "send": (message) => {
    if(message.content.split(" ").length <= 1){
      message.reply("`" + config.prefix.char + config.send[0] + " <message>`");
    } else if(message.content.split(" ")[1] == undefined){
      message.reply("`" + config.prefix.char + config.send[0] + " <message>`");
    } else if(message.content.split(" ")[1].length == 0){
      message.reply("`" + config.prefix.char + config.send[0] + " <message>`");
    } else {
      msg = message.content.split(" ");
      msg.shift();
      msg = msg.join(" ");
      message.delete();
      if(msg == undefined){
        message.reply("`" + config.prefix.char + config.send[0] + " <message>`");
      } else {
        message.channel.send(msg);
      }
    }
  },

  // let omega send a message (private message command)
  "send_privat": (message, client) => {
    if(message.content.split(" ").length <= 2){
      message.reply("`" + config.prefix.char + config.send[0] + " <channel id> <message>`");
    } else if(message.content.split(" ")[1] == undefined || message.content.split(" ")[2] == undefined){
      message.reply("`" + config.prefix.char + config.send[0] + " <channel id> <message>`");
    } else if(message.content.split(" ")[1].length == 0 || message.content.split(" ")[2].length == 0){
      message.reply("`" + config.prefix.char + config.send[0] + " <channel id> <message>`");
    } else {
      var contents = message.content.split(" ");
      var channel_id = contents[1];
      contents.shift();
      contents.shift();
      contents = contents.join(" ");
      var message_to_send = contents;
      if(client.channels.cache.get(channel_id) == undefined || message_to_send == undefined){
        message.reply("`" + config.prefix.char + config.send[0] + " <channel id> <message>`");
      } else {
        client.channels.cache.get(channel_id).send(message_to_send);
        message.reply("`successfully sent \"" + message_to_send + "\" to #" + client.channels.cache.get(channel_id).name + "`");
      }
    }
  },

  // Abstimung
  "abstimmung": (message, Discord) => {
    if(message.content.length >= 21){
      message.delete();
      const arg = message.content.slice(21);
      let embed = new Discord.MessageEmbed()
        .setColor("#55FFFF")
        .setDescription(arg)
        .setFooter('Asked by ' + message.author.username)
      
      message.channel.send(embed).then(sentEmbed => {
        if (message.content.slice(12,14) === 'ja'){
          sentEmbed.react("👍")
        }
        if (message.content.slice(15,17) === 'ja'){
          sentEmbed.react("👎")
        }
        if (message.content.slice(18,20) === 'ja'){
          sentEmbed.react("❓")
        }
      })
    } else {
      message.reply("`.abstimmung <ja/ne> <ja/ne> <ja/ne> <deine Frage>`");
    }
  },

  // löscht n Nachrichten, wobei n als Parameter vom Übergebenen strings 
  // extrahiert wird
  "loeschen": (message) => {
    if(message.content.split(" ").lenght == 1 || message.content.split(" ").length > 2){
      message.reply("`" + config.prefix.char + config.delete[0] + " <Anzahl der Nachrichten>`");
    } else if(message.content.split(" ")[1] == undefined){
      message.reply("`" + config.prefix.char + config.delete[0] + " <Anzahl der Nachrichten>`");
    } else if(message.content.split(" ")[1].length == 0){
      message.reply("`" + config.prefix.char + config.delete[0] + " <Anzahl der Nachrichten>`");
    } else {
      if(isNaN(parseInt(message.content.split(" ")[1]))){
        message.reply("`Bitte gebe ein Zahl ein!`");
      } else {
        const anz_nachrichten = parseInt(message.content.split(" ")[1]) + 1;
        if(anz_nachrichten > 99 || anz_nachrichten <= 0){
          message.reply("`Es können maximal 99 Nachrichten gelöscht werden!`");
        } else {
          message.channel.bulkDelete(anz_nachrichten).catch(error => console.log(error.stack));
        }
      }
    }
  },

  // you can create embed
  "embed": (message, Discord) => {
    const arguments = message.content.split("\n");
    //console.log(arguments.length);
    if(arguments.length < 6){
      message.channel.send("`Es fehlen Argumente. Für Hilfe wie der Command benutzt wird schreibe .help embed`");
    } else if(arguments.length % 2 === 1){
      message.channel.send("`Stelle sicher, dass du color, title und footer angegeben hast. Bei den fields musst du immer jeweils ein name und ein value angeben. Wenn du eines der beiden leer lassen möchtest, lasse dort einfach eine Leerzeile`")
    } else {
      if(!check_if_hex(arguments[1]) && arguments[1] !== ""){
        message.channel.send("`Das erste Argument ist die Farbe des Embeds. Diese muss als hex Darstellung angegeben werden. Also z.B. #ff12a6. Wenn du die default Farbe verwenden möchtest, lässt du als zweites Argument einfach eine Leerzeile.`");
      } else {
        var color  = arguments[1];
        if(color === ""){
          color = '#496ae0';
        }

        var title  = arguments[2];
        if(title === ""){
          title = "‎";
        }

        var footer = arguments[3];
        if(footer === ""){
          footer = "‎";
        }

        var fields_temp = arguments.splice(4);
        for(var i = 0; i< fields_temp.length; i++){
          if(fields_temp[i] === ""){
            fields_temp[i] = "‎";
          }
        }
        var fields = [];
        for(var i = 0; i < fields_temp.length/2; i++){
          fields[i] = [fields_temp[i*2], fields_temp[i*2+1]];
        }

        // kreiere das Embed
        const created_embed = new Discord.MessageEmbed()
         .setColor(color)
         .setTitle(title)
         .setFooter(footer)

        for(var i = 0; i<fields.length; i++){
          created_embed.addField(fields[i][0], fields[i][1]);
        }

        message.delete();
        message.channel.send(created_embed);
      }
    }
  }
}
