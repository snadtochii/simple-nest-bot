import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { BotService } from './bot/bot.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [BotService]
    }).compile();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });
});
