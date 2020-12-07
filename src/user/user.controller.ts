import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAll() {}
  @Post('register')
  async addUser(
    @Body('name') name: string,
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const data = await this.userService.createUser({
      name,
      username,
      password,
    });
    return { data };
  }
  @Post('login')
  async loginCheck(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const data = await this.userService.find({
      username,
      password,
    });
    if (!data)
      return {
        data,
        message: 'username or password invalid',
      };
    return { data, message: 'successful login' };
  }
}
