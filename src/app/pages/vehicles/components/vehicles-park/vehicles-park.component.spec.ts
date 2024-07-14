import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesParkComponent } from './vehicles-park.component';

describe('VehiclesParkComponent', () => {
  let component: VehiclesParkComponent;
  let fixture: ComponentFixture<VehiclesParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiclesParkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiclesParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
