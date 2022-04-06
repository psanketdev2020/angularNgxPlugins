import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ngx-rating',
  templateUrl: './ngx-rating.component.html',
  styleUrls: ['./ngx-rating.component.css']
})
export class NgxRatingComponent implements OnInit {

  max:number = 10;
  x:number = 7;
  y:number = 1;
  z:number = 5;
  isReadonly:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  readonly(){
    this.isReadonly = !this.isReadonly;
  }

}
