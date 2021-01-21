require('dotenv').config();
const { Client, Message } = require('discord.js');

const client = new Client();

client.on('message', (message) => {
  if (message.content.toLowerCase().includes('thanks')) {
    message.reply("welcome buddy");
  }
});

client.login(process.env.DISCORD_BOT_KEY);

