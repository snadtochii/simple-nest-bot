import { Get, Controller, Res } from '@nestjs/common';
import { BotService } from './bot/bot.service';

@Controller()
export class AppController {
  constructor(private botService: BotService) {}

  @Get()
  getDialog(@Res() res) {
    this.botService.initBot();
    res.send('started');
  }
}
