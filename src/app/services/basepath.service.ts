import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasepathService {
  static baseurl(baseurl: any) {
    throw new Error('Method not implemented.');
  }

  baseurl : string= 'http://localhost:3000/'


  constructor() { }

}
