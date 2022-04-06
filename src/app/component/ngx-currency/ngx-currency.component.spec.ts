import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCurrencyComponent } from './ngx-currency.component';

describe('NgxCurrencyComponent', () => {
  let component: NgxCurrencyComponent;
  let fixture: ComponentFixture<NgxCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
