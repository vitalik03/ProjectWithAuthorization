import { Injectable } from '@nestjs/common';
import { IMessage } from './interface/message.interface';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/users/interfaces/user.interface';


@Injectable()
export class MessagesService {
    constructor(@InjectModel('Message') readonly messageModel){}
    
    async addMessage(message: IMessage){
        const new_message = this.messageModel(message);
        return await new_message.save();
    }

    async deleteMessage(title: string){
        const params = {
            title
        }
        await this.messageModel.findOneAndDelete(params);
        return "success";
    }

    async updateMessage(message: IMessage)
    {
        const title = message.title;
        const params = {
            title
        }
        const text = message.text;
        const aparams = {
            text
        }
        const updated = await this.messageModel.findOneAndUpdate(params,aparams,{new: true});
        return updated; 
    }

    async find(params): Promise<IMessage>{
        return await this.messageModel.find(params).populate('user');
    }

    async findOne(params): Promise<IMessage>{
        return await this.messageModel.findOne(params);
    }
}
