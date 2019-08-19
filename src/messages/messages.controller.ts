import { Controller, Get, Post, Body, Delete, Put } from '@nestjs/common';
import { IMessage } from './interface/message.interface';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messageService: MessagesService){}
 
    @Post()
    addUser(@Body() createMessage: CreateMessageDto): Promise<IMessage> {
      return this.messageService.addMessage(createMessage);
    } 

    @Delete()
      deleteUser(@Body() createMessage: CreateMessageDto){
        return this.messageService.deleteMessage(createMessage.title);
      }

    @Put()
      updateUser(@Body() message: CreateMessageDto): Promise<IMessage>{
        return this.messageService.updateMessage(message);
      }
}
