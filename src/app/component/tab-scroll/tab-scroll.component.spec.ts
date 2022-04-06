import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabScrollComponent } from './tab-scroll.component';

describe('TabScrollComponent', () => {
  let component: TabScrollComponent;
  let fixture: ComponentFixture<TabScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
