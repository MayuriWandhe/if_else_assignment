import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasepathService } from './basepath.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http : HttpClient,
    private basepath : BasepathService
  ) { }

  getOrder(){
    return this.http.get(this.basepath.baseurl + 'recent_orders').pipe(map((res:any)=>{
      return res;
    }))
  }
}
