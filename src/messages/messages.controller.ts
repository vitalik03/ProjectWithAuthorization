import { Controller, Get, Post, Body, Delete, Put, UseGuards, Param } from '@nestjs/common';
import { IMessage } from './interface/message.interface';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { AuthGuard } from '@nestjs/passport';
import { CustomGuard } from '../common/guards/custom.guard';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messageService: MessagesService){}
 
    @Post()
    @UseGuards(AuthGuard('jwt'), CustomGuard)
    addUser(@Body() createMessage: CreateMessageDto): Promise<IMessage> {
      return this.messageService.addMessage(createMessage);
    } 

    @Get('/user/:user')
      getByUserId(@Param('user')user: string): Promise<IMessage>{
        return this.messageService.find({user});
      }

    @UseGuards(AuthGuard('jwt'),CustomGuard)
    @Delete()
      deleteUser(@Body() createMessage: CreateMessageDto){
        
        return this.messageService.deleteMessage(createMessage.title);
      }

    @UseGuards(AuthGuard('jwt'),CustomGuard)
    @Put()
      updateUser(@Body() message: CreateMessageDto): Promise<IMessage>{
        return this.messageService.updateMessage(message);
      }
}
