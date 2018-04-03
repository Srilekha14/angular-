import { Component, OnInit } from '@angular/core';
import {RemotecallService} from "../../remotecall.service";
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private rcs :RemotecallService) 
  {
    rcs.callremote();
    console.log("I am in Service")
   }

  ngOnInit() {
  }

}
