import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import { Observable,map } from 'rxjs';
import { AxiosResponse } from 'axios';
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService){}
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(id:string):Observable<AxiosResponse<any>>{
    const url = 'http://reqres.in/api/users';

    return this.httpService.get(`${url}/${id}`).pipe(map((resp)=>{return resp.data}));

  }
}
