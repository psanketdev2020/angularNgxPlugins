import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatepickerComponent } from './ngx-datepicker.component';

describe('NgxDatepickerComponent', () => {
  let component: NgxDatepickerComponent;
  let fixture: ComponentFixture<NgxDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
