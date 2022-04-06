import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxModalsComponent } from './ngx-modals.component';

describe('NgxModalsComponent', () => {
  let component: NgxModalsComponent;
  let fixture: ComponentFixture<NgxModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
