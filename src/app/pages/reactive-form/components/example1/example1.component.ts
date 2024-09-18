import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroupDirective, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { get } from 'lodash';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss'
})
export class Example1Component implements OnInit {
  // Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
  matcher = new MyErrorStateMatcher();
  example1Form = this.formBuilder.group({
    firstName: [null],
    lastName: [null, Validators.minLength(3)],
    email: [null, [Validators.required, Validators.email]],
    age: [null, [Validators.required, this.numericValidator]],
    salary: [null, [Validators.pattern('^[0-9]*$')]],
    expetedSalary: [null, [Validators.required, Validators.min(2000), Validators.max(12000), Validators.pattern('^[0-9]*$')]],
    password: [null, [Validators.required, Validators.minLength(8)]],
    confirmPassword: [null, [Validators.required]]
  }, { validators: this.passwordsMatchValidator })
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.example1Form.value)
  }

  numericValidator(control: AbstractControl): ValidationErrors | null {
    let result: any
    const value = control.value;
    const isValid = !isNaN(value) && !isNaN(parseFloat(value));
    result = isValid ? null : { notNumeric: true };
    return result
  }

  passwordsMatchValidator(form: AbstractControl): ValidationErrors | null {
    let passwordControl = form.get('password')
    let confirmPasswordControl = form.get('confirmPassword')
    const password = passwordControl?.value;
    const confirmPassword = confirmPasswordControl?.value;
    if (confirmPassword == null || password == null)
      return null
    return password === confirmPassword ? null : { 'passwordsMismatch': true };
  }

}

// example1Form = this.formBuilder.group({
//   firstName: [null, [Validators.required, Validators.minLength(3)]],
//   lastName: [null, Validators.minLength(3)],
//   email: [null, [Validators.required, Validators.email]],
//   age: [null, [Validators.required, this.numericValidator]],
//   salary: [null, [Validators.pattern('^[0-9]*$')]],
//   expetedSalary: [null, [Validators.required, Validators.min(2000), Validators.max(12000), Validators.pattern('^[0-9]*$')]],
//   password: ['', [Validators.required, Validators.minLength(8)]],
//   confirmPassword: ['', [Validators.required]]
// }, { validators: this.passwordsMatchValidator })
