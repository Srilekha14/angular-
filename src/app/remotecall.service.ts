import { Injectable } from '@angular/core';

@Injectable()
export class RemotecallService {

  constructor() { }
  callremote(){
    console.log("I am in service")
  }
}
