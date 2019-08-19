import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { MessagesModule } from './messages/messages.module';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../src/config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURL), UsersModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
