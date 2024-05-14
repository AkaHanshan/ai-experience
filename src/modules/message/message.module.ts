import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 500000,
      maxRedirects: 5,
    }),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
