import { Controller, Get, Post, Body, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    
    @Post()
    addUser(@Body() createUser: CreateUserDto): Promise<IUser> {
      return this.usersService.addUser(createUser);
    } 

    @Delete()
      deleteUser(@Body() createUser: CreateUserDto){
        return this.usersService.deleteUser(createUser.username);
      }

    @Put()
      updateUser(@Body() user: CreateUserDto): Promise<IUser>{
        return this.usersService.updateUser(user);
      }
}
