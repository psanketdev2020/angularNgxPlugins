import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-pagination',
  templateUrl: './ngx-pagination.component.html',
  styleUrls: ['./ngx-pagination.component.css']
})
export class NgxPaginationComponent implements OnInit {

  totalItems_50 = 50;
  totalItems_100 = 100;
  currentPage = 4;
  directionLinks:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
