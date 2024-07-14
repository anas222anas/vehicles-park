import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartActiveCarComponent } from './chart-active-car.component';

describe('ChartActiveCarComponent', () => {
  let component: ChartActiveCarComponent;
  let fixture: ComponentFixture<ChartActiveCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartActiveCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartActiveCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
