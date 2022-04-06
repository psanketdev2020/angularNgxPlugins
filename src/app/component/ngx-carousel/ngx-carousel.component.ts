import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-carousel',
  templateUrl: './ngx-carousel.component.html',
  styleUrls: ['./ngx-carousel.component.css']
})
export class NgxCarouselComponent implements OnInit {

  interval:number = 2000;
  constructor() { }

  ngOnInit(): void {
  }

}
