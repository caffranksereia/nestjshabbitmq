import { Controller, Get,Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user/:id')
  getUsers(@Param('id') id:string) {
    return this.appService.getUsers(id);
   

  }

  
}
