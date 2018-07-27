import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class BotService implements OnModuleInit {
  onModuleInit() {
    this.initBot();
  }

  initBot() {
    const TelegramBot = require('node-telegram-bot-api');

    const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

    bot.on('message', msg => {
      const Hi = 'hi';
      if (
        msg.text
          .toString()
          .toLowerCase()
          .indexOf(Hi) === 0
      ) {
        bot.sendMessage(
          msg.from.id,
          'Hello ' +
            msg.from.first_name +
            ' what would you like to know about me ?'
        );
      }

      if (
        msg.text
          .toString()
          .toLowerCase()
          .includes('who')
      ) {
        bot.sendMessage(
          msg.chat.id,
          'I am an intelligent telegram robot, built with Nest.js. Thanks for asking'
        );
      }

      if (
        msg.text
          .toString()
          .toLowerCase()
          .includes('javascript')
      ) {
        bot.sendMessage(
          msg.from.id,
          'Oh, did I hear you say JavaScript? \n I really love JavaScript'
        );
      }
    });
  }
}
