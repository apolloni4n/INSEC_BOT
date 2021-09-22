require('dotenv').config();
const { Client, Intents } = require('discord.js'); //import discord.js

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }) //create new client

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('message', msg => {
    PREFIX = "$";
    if (msg.author.bot) return;
    if (msg.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = msg.content.trim().substring(PREFIX.length).split(/\s+/);
        //kick users
        if (CMD_NAME === "kick") {
            const member = msg.guild.members.cache.get(args[0]);
            if(member){
                member
                .kick()
                .then((member)=>msg.channel.send(`${member} was kicked.`))
                .catch((err)=> msg.channel.send('I do not have permissions to do that.'));
            }
            else{
                msg.channel.send('That member was not found')
            }
            msg.channel.send('kicked the user');

        }
    }

});