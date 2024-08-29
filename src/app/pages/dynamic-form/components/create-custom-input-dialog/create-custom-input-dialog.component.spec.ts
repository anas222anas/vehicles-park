import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomInputDialogComponent } from './create-custom-input-dialog.component';

describe('CreateCustomInputDialogComponent', () => {
  let component: CreateCustomInputDialogComponent;
  let fixture: ComponentFixture<CreateCustomInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCustomInputDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCustomInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
