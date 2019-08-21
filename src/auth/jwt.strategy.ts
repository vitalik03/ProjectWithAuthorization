import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, PayloadTooLargeException } from '@nestjs/common';
import {  jwtConstants } from './constants';
import { async } from 'rxjs/internal/scheduler/async';
import { validate } from '@babel/types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }
        async validate(payload: any){
            return {username: payload.username, role: payload.role};
    }
}