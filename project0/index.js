const { Telegraf } = require('telegraf');
const { message } = require ('telegraf/filters');

const bot = new Telegraf('6244211526:AAHFm0-4-38eqesWrb63lX4UtcB6ec399Fs');
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();
/**const {Telegraf}  = require('telegraf');
const bot = new Telegraf('6244211526:AAHFm0-4-38eqesWrb631X4UtcB6ec399Fs');
bot.start(async (ctx) => {
    try {
      await ctx.reply('welcome to my bot')
    }
    catch (error) {
      console.log(error);
    }});
bot.launch();*/
//using different token thes4 APIs will be able to identify the users or consumers
//secret token-API key

/**
 * HOW TO GET SECRET TOKEN for creating bot
 * ->open telegram and search for BotFather
 * ->to read instruction type /start and press ENTER
 * ->to create new bot type /newbot and press ENTER
 * ->it will ask for bot name ,give a bot name without / e.g:coding_bot
 * whenever you write /it will consider it as telegram command
 * ->then it will ask for username ending with bot ,e.g:Algo_soln_bot
 * //t.me/Algo_soln_bot
 */

//const bot = new Telegraf(process.env.BOT_TOKEN);
//const bot = new Telegraf('6244211526:AAHFm0-4-38eqesWrb631X4UtcB6ec399Fs');

//at production level we have to hide this secret token for this
//we can use dotenv package npm




