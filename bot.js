// main File of the Bot

////////////////////////////////////////////////////////////
///// Import stuff /////////////////////////////////////////
////////////////////////////////////////////////////////////

// json Dateien
const auth        = require('./auth.json');
const config      = require('./config.json');

// functions
const Discord     = require('discord.js');
const commands    = require("./commands.js");
const embeds      = require("./embeds.js");
const ttt         = require('./ttt/ttt.js');

////////////////////////////////////////////////////////////
///// Program //////////////////////////////////////////////
////////////////////////////////////////////////////////////

// definiert den aktuellen Discord Server
const client = new Discord.Client({ 
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

// ------------------------------------------------------//
// ---------- everything on Bot Login -------------------//
// ------------------------------------------------------//

// Get the bot online with some settings
client.login(auth.token);

client.on('ready', () => {

  // console log that the bot is online
  console.log(`Logged in as ${client.user.tag}!`);

  // sets status of the bot
  client.user.setActivity(config.start_bot.status_of_bot, {type: config.start_bot.status_of_bot_type});

  // sends message in Discord if do_start_message is true
  if(config.start_bot.do_start_message){
    client.channels.cache.get(config.start_bot.channel_for_start_message).send(config.start_bot.start_message)
  }
});

// ------------------------------------------------------//
// ----- does something when a message was sent ---------//
// ------------------------------------------------------//

// mostly used for commands
client.on('message', async message => {

  ////// Dev commands://////

  // let omega send a message
  if (config.roles.developer.includes(message.author.id) & 
      message.content.slice(0, 1) === config.prefix.char & 
      message.channel.type !== 'dm' & 
      config.send.includes(message.content.split(" ")[0].slice(1))){
    commands.send(message);
  }

  // lets omega send a message in the given channel
  if (config.roles.developer.includes(message.author.id) & 
      message.content.slice(0, 1) === config.prefix.char & 
      message.channel.type === 'dm' & 
      config.send.includes(message.content.split(" ")[0].slice(1))){
    commands.send_privat(message, client);
  }

  // deletes latest messages
  if (config.roles.developer.includes(message.author.id) & 
      message.content.slice(0, 1) === config.prefix.char & 
      config.delete.includes(message.content.split(" ")[0].slice(1))){
    commands.loeschen(message);
  }

  ////// public commands://////

  // gibt Infos über den user aus der ge-@ wurde
  if(message.content.slice(0, 1) === config.prefix.char & 
    config.user.info.includes(message.content.slice(1).split(" ")[0])){
      commands.user(message, Discord, client);
  }

  // help-embed omega
  if (message.content.slice(0, 1) === config.prefix.char & 
      config.help.omega.includes(message.content.slice(1))){
    embeds.omega(message, Discord);
  }

  // Abstimmung
  if (message.content.slice(0, 1) === config.prefix.char & 
      message.content.slice(1).startsWith(config.abstimmung)){
    commands.abstimmung(message, Discord);
  }

  // tik tak toe
  if (message.content.slice(0, 1) === config.prefix.char & 
      config.ttt.command.includes(message.content.slice(1))){
    ttt.play_game(message, Discord, client);
  }

  // kreiert eigenes embed
  if(config.roles.developer.includes(message.author.id) && 
     message.content.slice(0,config.prefix.length) === config.prefix.char &&
     config.embed.includes(message.content.split("\n")[0].slice(config.prefix.length))){
    commands.embed(message, Discord);
  }

  // help-embed wie man den command .embed benutzt
  if(config.roles.developer.includes(message.author.id) &&
     message.content.slice(0,config.prefix.length) === config.prefix.char &&
     config.embed_help.includes(message.content.slice(config.prefix.length))){
    embeds.embed_help(message, Discord);
  }

});
