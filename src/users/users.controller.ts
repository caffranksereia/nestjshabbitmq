import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/user')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/user/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get('/api/user/:id/avatar')
  update(@Param('id') id: string) {
    return this.usersService.getAvatar(id);
  }

  @Delete('/api/user/:id/avatar')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
