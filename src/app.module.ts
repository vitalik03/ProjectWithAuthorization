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
import { AuthModule } from './auth/auth.module';
import config from './config/keys';
import { RolesGuard } from './common/guards/roles.guards';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURL), UsersModule, MessagesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService
    // {
    // provide: APP_GUARD,
    // useClass: RolesGuard
    // }
  ],
})
export class AppModule {}
