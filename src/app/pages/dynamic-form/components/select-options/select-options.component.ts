import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CreateCustomInputDialogComponent } from '../create-custom-input-dialog/create-custom-input-dialog.component';
import { ErrorStateMatcher } from '@angular/material/core';
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}
@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrl: './select-options.component.scss'
})
export class SelectOptionsComponent implements OnDestroy{
  subscription: Subscription
  optionForm = this.formBuilder.group({
    value: [null, [Validators.required, Validators.pattern(/^\S+$/)]],
    label: [null, [Validators.required]],
  })
  matcher = new MyErrorStateMatcher();
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateCustomInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.subscription = new Subscription()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log(this.optionForm.value)
    if (!this.optionForm.valid)
      return
    this.dialogRef.close(this.optionForm.value)
  }

  close() {
    this.dialogRef.close()
  }
}
