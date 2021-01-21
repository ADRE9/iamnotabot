require('dotenv').config();
const { Client, Message } = require('discord.js');

const client = new Client();

client.on('message', (message) => {
  if (message.content.includes('thanks')) {
    message.reply("You Got A cookie!! YAY!!")
  }
});

client.login(process.env.DISCORD_BOT_KEY);

