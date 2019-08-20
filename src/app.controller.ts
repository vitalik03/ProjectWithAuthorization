import { Controller, Get, Post, Body, HttpException, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService, private usersService: UsersService) {}

  @Post('login')
  async login(@Body() user){
    const user1 = await this.usersService.findOne( user.username );
    if(!user1)
    {
        throw new HttpException( 'User not found' , 404 );
    }
    return this.authService.login( user );
  }
  
  @Post( 'register' )
  async register( @Body() user ){
    const finduser = await this.usersService.findOne(user.username);
    if ( finduser )
    {
        throw new HttpException('User is already created', 400 );
    }
    const {pass = ''} = user;
    if ( pass.length < 5 || pass.length > 8){
      throw new HttpException( 'Pass should have more than 5 and less than 8' , 400 );
    }
    const user1 = await this.usersService.addUser(user);
    return user1;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req){
    return req.user;
  }
}
