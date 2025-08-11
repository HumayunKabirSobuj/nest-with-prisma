import { Injectable } from '@nestjs/common';
import prisma from 'src/utils/prisma';

@Injectable()
export class ClientService {
  async getAllUsers() {
    const result = await prisma.user.findMany();
    return result;
  }
}
