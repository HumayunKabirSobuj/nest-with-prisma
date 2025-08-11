import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { transferableAbortSignal } from 'util';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  async getAllUsers() {
    const result = await this.appService.getAllUsers();
    return {
      message: 'All User Fetched Successfully...',
      data: result,
    };
  }
  @Post('/register')
  async register(@Body() body: { name: string; email: string }) {
    const result = await this.appService.register(body);
    return {
      message: 'registration successful...',
      data: result,
    };
  }
}
