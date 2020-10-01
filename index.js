const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require('fs'); 




//--------------------------------------------------------------------

bot.on("message",async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
      let commandfile = require(`./commands/${command}.js`);
      commandfile.run(bot, message, args);
  } catch (err) {
      console.error(err);
  }
});


//--------------------------------------------------------------------

bot.config = config;




fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
  
});



bot.login(config.token)

});