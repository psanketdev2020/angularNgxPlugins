import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-sorting',
  templateUrl: './ngx-sorting.component.html',
  styleUrls: ['./ngx-sorting.component.css']
})
export class NgxSortingComponent implements OnInit {

  itemStringsLeft = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];

  itemObjects: any[] = [
    {id: 1, name: 'sanket', profile: 'front end developer'},
    {id: 2, name: 'rahul', profile:'software engineer'},
    {id: 3, name: 'shital', profile: 'software developer'},
    {id: 4, name: 'monali', profile: 'backend developer'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
