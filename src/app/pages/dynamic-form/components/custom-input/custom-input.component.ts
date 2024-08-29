import { AfterViewInit, ChangeDetectorRef, Component, input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { CUSTOM_INPUT_MODEL, CustomInputTypes } from '../../models/custom-input.model';
import { ErrorStateMatcher } from '@angular/material/core';

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}
@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})

export class CustomInputComponent implements AfterViewInit {
  config = input.required<CUSTOM_INPUT_MODEL>();
  key = input.required<string>();
  formGroup = input.required<FormGroup>();
  types = new CustomInputTypes()
  matcher = new MyErrorStateMatcher();
  constructor(private cdref: ChangeDetectorRef) {
  }
  ngAfterViewInit(): void {
    console.log(this.config().type)
    console.log(this.config())
    setTimeout(() => {
      if (this.config().disabled) {
        this.formGroup()?.get(this.key())?.disable();
        console.log('a')
      }
    }, 0);
  }
}
