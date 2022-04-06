import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSortingComponent } from './ngx-sorting.component';

describe('NgxSortingComponent', () => {
  let component: NgxSortingComponent;
  let fixture: ComponentFixture<NgxSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
