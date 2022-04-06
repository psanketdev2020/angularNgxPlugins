import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ngx-spinner',
  templateUrl: './ngx-spinner.component.html',
  styleUrls: ['./ngx-spinner.component.css', '../ngx-loader/ngx-loader.component.css']
})
export class NgxSpinnerComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    this.spinner.show();

    setInterval(()=>{
      this.spinner.hide();
    }, 5000);
  }

  showSpinner(){
    this.spinner.show();

    setInterval(()=>{
      this.spinner.hide();
    }, 5000);
  }

}
