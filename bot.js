const Token = "`\`\`407244267984125972`\`\`"

const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'Huler Nefoo',
     details: `Huler`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `Huler`,
    application_id: '407244267984125972',
     assets: {
        small_image: `583050351691694093`,
        small_text: 'Iam The Best',
        large_image: `583050351691694093`,
        large_text: `Nefoo` }

  }
    });
});


client.on('message' , message => {
if (message.author.bot) return;
           if (message.content == '.')
           if (message.author.id === '407244267984125972'){
if (!message.channel.guild) return;
message.author.send(Token)
}  
});

client.login(process.env.BOT_TOKEN);