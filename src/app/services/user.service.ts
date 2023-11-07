import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasepathService } from './basepath.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient,
    private basepath : BasepathService
  ) { }

  getUserList(){
    return this.http.get(this.basepath.baseurl + 'new_users').pipe(map((res:any)=>{
      return res;
    }))
  }

  getUserById(id:any){
    return this.http.get(this.basepath.baseurl + 'new_users/' + id).pipe(map((res:any)=>{
      return res
    }))
  }

}
