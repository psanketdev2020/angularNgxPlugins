import { Component } from '@angular/core';
import { NgxUiLoaderService, NgxUiLoaderConfig } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config : NgxUiLoaderConfig;
  title = 'ngx-bootstrap';

  constructor(private ngxUiLoaderService: NgxUiLoaderService ){
    this.config = this.ngxUiLoaderService.getDefaultConfig();
  }

}
