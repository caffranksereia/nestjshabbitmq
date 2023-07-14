import { Injectable, Get,
  Post,
  Body,
  Param,
  Delete,
  Put, } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocuments } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {HttpService} from '@nestjs/axios';
import { Observable,map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel (User.name) private userModel: Model <UserDocuments>, 
  private readonly httpService: HttpService
  ){}
  create(@Body()createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  findAll() {
    const url = 'http://reqres.in/api/users';
    return this.httpService.get(url).pipe(map((resp)=>{return resp.data}));
  }

  findOne(id: string) {
    const url = 'http://reqres.in/api/users';

    return this.httpService.get(`${url}/${id}`).pipe(map((resp)=>{return resp.data}));
  }

  getAvatar(id: string) {
    
  }

  remove(id: string) {
    
  }
}
