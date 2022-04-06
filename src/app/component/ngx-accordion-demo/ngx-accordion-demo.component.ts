import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-ngx-accordion-demo',
  templateUrl: './ngx-accordion-demo.component.html',
  styleUrls: ['./ngx-accordion-demo.component.css']
})


export class NgxAccordionDemoComponent {


  myForm: FormGroup;
  constructor(  private fb: FormBuilder, private currencyPipe : CurrencyPipe) {}

  

  public yes:boolean= true;
  cutsomeClass = 'cutsomeClass';

  ngOnInit(): void {
    this.myForm = this.fb.group({
      netWorth: ['', Validators.required]
    });

    this.myForm.valueChanges.subscribe(form => {
      if(form.netWorth) {
        this.myForm.patchValue({
          netWorth: this.currencyPipe.transform(form.netWorth.replace(/\B(?=(\d{2})+(?!\d))/g, ","), 'INR', 'symbol')
        }, {emitEvent: false});
      }
    });
  }



}


  

