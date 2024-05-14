import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageIncomingDto } from './message.dto';
import { MessageOutgoingDto } from './message.dto';

@Controller()
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post('get-message')
  async getMessage(@Body() dto: MessageIncomingDto): Promise<any> {
    try {
      // 直接返回服务中的结果
      return await this.messageService.getMessage(dto);
    } catch (error) {
      // 如果有错误，可以抛出一个 HttpException
      throw new HttpException(
        'An error occurred',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
