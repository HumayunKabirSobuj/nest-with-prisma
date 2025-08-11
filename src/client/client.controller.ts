import { Controller, Get } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('/users')
  async getAllUser() {
    const result = await this.clientService.getAllUsers();
    return result
  }
}
