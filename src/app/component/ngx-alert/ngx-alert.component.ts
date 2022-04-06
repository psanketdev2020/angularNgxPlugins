import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-alert',
  templateUrl: './ngx-alert.component.html',
  styleUrls: ['./ngx-alert.component.css']
})
export class NgxAlertComponent implements OnInit {

  dismissible:boolean = true;
  hide:boolean = true;
  isCollapse:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  dismissAlert(e){
    this.hide = false;
  }

}
