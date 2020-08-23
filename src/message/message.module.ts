import { Module } from '@nestjs/common';
import { MessageService } from './service/message.service';
@Module({
  providers: [MessageService]
})
export class MessageModule { }
