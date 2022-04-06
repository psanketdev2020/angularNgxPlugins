import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDropdownsComponent } from './ngx-dropdowns.component';

describe('NgxDropdownsComponent', () => {
  let component: NgxDropdownsComponent;
  let fixture: ComponentFixture<NgxDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDropdownsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
