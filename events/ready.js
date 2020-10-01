const Discord = require("discord.js");
const bot = new Discord.Client()

module.exports = bot => {
    console.log('on!')
    // bot.user.setActivity("Hello", {type: "STREAMING", url: "http://twitch.tv/steam"});

    let statuses = [
            `over ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`,
            `,help`,
            `over ${bot.guilds.cache.size} guilds`
            

            
    ]


    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, {type: "WATCHING"})

    }, 20000)

}
