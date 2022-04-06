import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-ngx-datepicker',
  templateUrl: './ngx-datepicker.component.html',
  styleUrls: ['./ngx-datepicker.component.css']
})
export class NgxDatepickerComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, {static: false}) datepicker: BsDatepickerDirective;

  todayDate = new Date();
  minDate = new Date;
  maxDate = new Date;


  constructor() {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
   }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onScrollEvent(){
    this.datepicker.hide();
  }



}
