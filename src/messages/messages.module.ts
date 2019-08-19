import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './schemas/message.schemas';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';

@Module({
    imports: [MongooseModule.forFeature([
        {name:'Message',schema:MessageSchema}])
      ],
      exports: [MessagesService],
      providers: [MessagesService],
      controllers: [MessagesController]
})
export class MessagesModule {}
