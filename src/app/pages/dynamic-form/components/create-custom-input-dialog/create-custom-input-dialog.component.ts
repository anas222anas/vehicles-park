import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { CustomInputTypes, TYPES } from '../../models/custom-input.model';
import { SelectOptionsComponent } from '../select-options/select-options.component';


class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}

@Component({
  selector: 'app-create-custom-input-dialog',
  templateUrl: './create-custom-input-dialog.component.html',
  styleUrl: './create-custom-input-dialog.component.scss'
})
export class CreateCustomInputDialogComponent implements OnDestroy {
  type: TYPES = TYPES.Text
  types = new CustomInputTypes()
  subscription: Subscription
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateCustomInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.subscription = new Subscription()
  }
  matcher = new MyErrorStateMatcher();
  inputForm = this.formBuilder.group({
    key: [null, [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
    type: [this.type, Validators.required],
    label: [null, [Validators.required]],
    placeholder: [null, [Validators.maxLength(20)]],
    defaultValue: [null],
    min: [null],
    max: [null],
    minLength: [null],
    maxLength: [null],
    required: [false],
    readonly: [false],
    disabled: [false],
    options: new FormControl<any[]>([])
  })
  selectOptions: { value: string, label: string }[] = [
  ]
  ngOnInit(): void {
    this.subscription.add(this.inputForm.get('type')?.valueChanges.subscribe(newType => {
      if (newType)
        this.type = newType
    }))
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSubmit() {
    console.log(this.inputForm.value)
    if (!this.inputForm.valid)
      return
    const data = this.inputForm.value
    if (data.options)
      data.options = [
        ...this.mappingSelectOptions(data.options)
      ]
    this.dialogRef.close(data)
  }

  numericValidator(control: AbstractControl): ValidationErrors | null {
    let result: any
    const value = control.value;
    const isValid = !isNaN(value) && !isNaN(parseFloat(value));
    result = isValid ? null : { notNumeric: true };
    return result
  }
  close() {
    this.dialogRef.close()
  }
  typesOption = [
    { value: TYPES.Text, label: 'Text' },
    { value: TYPES.Number, label: 'Number' },
    { value: TYPES.Date, label: 'Date' },
    { value: TYPES.Password, label: 'Password' },
    { value: TYPES.Checkbox, label: 'Checkbox' },
    { value: TYPES.Select, label: 'Select' }
  ];
  addOption() {
    this.dialog.open(SelectOptionsComponent, {
      data: '',
      width: '650px',
      height: '35%',
      disableClose: true
    }).afterClosed().subscribe((option: any) => {
      if (option) {
        this.selectOptions.push(option)
        const newValue = this.selectOptions.map(item => {
          return item.value
        })
        const oldValue = this.inputForm.get('option')?.value
        // if (oldValue)
        // this.inputForm.get('option')?.setValue(newValue)
        // else
        this.inputForm.get('options')?.setValue([...newValue])
      }
    })
  }
  mappingSelectOptions(data: any[] | null | undefined): { value: string, label: string }[] {
    const temp = (data || []).map(item => {
      let label = this.selectOptions.find(itemF => {
        return itemF.value == item
      })
      return { value: item, label: label?.label || '' }
    })
    return temp
  }


}
