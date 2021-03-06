import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimepickerComponent } from './ngx-timepicker.component';

describe('NgxTimepickerComponent', () => {
  let component: NgxTimepickerComponent;
  let fixture: ComponentFixture<NgxTimepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTimepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
