import { Injectable } from '@nestjs/common';
import prisma from './utils/prisma';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to my api !!!';
  }

  async register(body: { name: string; email: string }) {
    // console.log({body});

    const result = await prisma.user.create({
      data: body,
    });
    return result;
  }

  async getAllUsers() {
    const result = await prisma.user.findMany();
    return result;
  }
}
