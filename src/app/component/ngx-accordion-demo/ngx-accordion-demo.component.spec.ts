import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAccordionDemoComponent } from './ngx-accordion-demo.component';

describe('NgxAccordionDemoComponent', () => {
  let component: NgxAccordionDemoComponent;
  let fixture: ComponentFixture<NgxAccordionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAccordionDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAccordionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
