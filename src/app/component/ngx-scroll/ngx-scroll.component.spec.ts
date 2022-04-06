import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScrollComponent } from './ngx-scroll.component';

describe('NgxScrollComponent', () => {
  let component: NgxScrollComponent;
  let fixture: ComponentFixture<NgxScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
