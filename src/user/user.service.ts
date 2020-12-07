import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('JdUser') private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(userDto: {
    name: string;
    username: string;
    password: string;
  }): Promise<{}> {
    const newUser = new this.userModel(userDto);
    const unlist = await this.userModel.find({ username: userDto.username });
    if (unlist.length) return { error: 'usernmae taken' };
    console.log('still executing');
    const data = await newUser.save();
    console.log(data);
    return data;
  }
  async find(userDto: { username: string; password: string }): Promise<{}> {
    const user = await this.userModel.findOne({
      username: userDto.username,
      password: userDto.password,
    });
    return user;
  }
}
