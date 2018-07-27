import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { BotService } from './bot/bot.service';

@Module({
  controllers: [AppController],
  providers: [BotService]
})
export class AppModule {}
