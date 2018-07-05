//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoitemlistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoitemlistProvider {
  public items = [];
  public count:number = 0;

  // constructor(public http: HttpClient) {
  //   console.log('Hello TodoitemlistProvider Provider');
  // }

}

