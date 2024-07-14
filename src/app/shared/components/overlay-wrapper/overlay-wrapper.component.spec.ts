import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayWrapperComponent } from './overlay-wrapper.component';

describe('OverlayWrapperComponent', () => {
  let component: OverlayWrapperComponent;
  let fixture: ComponentFixture<OverlayWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
