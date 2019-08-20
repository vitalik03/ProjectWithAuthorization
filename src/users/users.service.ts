import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UsersService {
    constructor(@InjectModel('User') readonly userModel){}
    
    async addUser(user: IUser){
        const new_user = this.userModel(user);
        return await new_user.save();
    }

    async deleteUser(name: string){
        const params = {
            name
        }
        await this.userModel.findOneAndDelete(params);
        return "success";
    }

    async updateUser(user: IUser)
    {
        const name = user.username;
        const params = {
            name
        }
        const email = user.password;
        const aparams = {
            email
        }
        const updated = await this.userModel.findOneAndUpdate(params,aparams,{new: true});
        return updated; 
    }

    async findOne( username: string ){
        const params = {
            username
        }
        const user = await this.userModel.findOne( params );
        return user;
    }
}
