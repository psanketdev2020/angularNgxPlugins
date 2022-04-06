import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-timepicker',
  templateUrl: './ngx-timepicker.component.html',
  styleUrls: ['./ngx-timepicker.component.css']
})
export class NgxTimepickerComponent implements OnInit {
  public curretTime:any;
  public time:Date = new Date();
  dynamicContent:string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit."  


  constructor() { 
    
  
  }

  ngOnInit(): void {
    setInterval(()=>{
      const date:Date = new Date();
      this.updateDate(date);
    }, 1000);
  }

  private updateDate(date: Date) {
    this.curretTime = date.toLocaleTimeString();
    this.time = date;
  }

}
