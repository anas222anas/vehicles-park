import { Component, effect, OnDestroy, Signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicControlService } from '../../services/dynamic-control.service';
import { DynamicFormState } from '../../state/dynamic-form.state';
import { Store } from '@ngxs/store';
import { GetConfigForDynamicFormAction, SetConfigForDynamicFormAction } from '../../state/dynamic-form.actions';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CreateCustomInputDialogComponent } from '../create-custom-input-dialog/create-custom-input-dialog.component';
import { CUSTOM_INPUT_MODEL, TYPES } from '../../models/custom-input.model';

@Component({
  selector: 'app-create-dynamic-form',
  templateUrl: './create-dynamic-form.component.html',
  styleUrl: './create-dynamic-form.component.scss'
})
export class CreateDynamicFormComponent implements OnDestroy {
  viewFormConfig: Signal<CUSTOM_INPUT_MODEL[]> = this.store.selectSignal<CUSTOM_INPUT_MODEL[]>(DynamicFormState.config)
  viewFormGroup: FormGroup = new FormGroup({})
  subscription: Subscription = new Subscription()
  constructor(private dynamicControlService: DynamicControlService, private store: Store, private dialog: MatDialog) {
    const localData: CUSTOM_INPUT_MODEL[] = [
      {
        type: TYPES.Text, key: 'fitst-name', label: 'First Name',
        placeholder: 'Enter First Name', required: true, defaultValue: 'Anas', readonly: false
      }
      // ,
      // {
      //   type: TYPES.Text, key: 'last-name', label: 'Last Name',
      //   placeholder: 'Enter Last Name', required: false, defaultValue: 'Zidan', maxLength: 25, minLength: 3
      // },
      // {
      //   type: TYPES.Password, key: 'password', label: 'Password',
      //   placeholder: 'Enter Password', required: true, disabled: false
      // },
      // {
      //   type: TYPES.Number, key: 'age', label: 'Age', min: 10, max: 100,
      //   placeholder: 'Enter Age', required: true
      // },
      // {
      //   type: TYPES.Select, key: 'country', label: 'Country',
      //   placeholder: 'select country', required: true, disabled: false, defaultValue: 1, multiple: false,
      //   options: [{value: 1, label: 'UAE'}, {value: 2, label: 'Syria'}, {value: 3, label: 'Saudi'}]
      // }
    ]
    this.store.dispatch(new SetConfigForDynamicFormAction(localData))
    // this.store.dispatch(new GetConfigForDynamicFormAction())
    effect(() => {
      this.viewFormGroup = this.dynamicControlService.toFormGroup(this.viewFormConfig());
    })
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSubmit() {
    this.viewFormGroup.markAllAsTouched()
    this.viewFormGroup.updateValueAndValidity()
    console.log(this.viewFormGroup.value)
  }
  addCustomInput() {
    this.subscription.add(this.dialog.open(CreateCustomInputDialogComponent, {
      data: '',
      width: '700px',
      height: '95%',
      disableClose: true
    }).afterClosed().subscribe((config: any) => {
      if (config) {
        this.store.dispatch(new SetConfigForDynamicFormAction(
          [...this.store.selectSnapshot<CUSTOM_INPUT_MODEL[]>(DynamicFormState.config), { ...config }]
        ))
        // this.viewFormConfig = [...this.viewFormConfig, {...config}];
        // this.viewForm = this.dynamicControlService.toFormGroup(this.viewFormConfig);
      }
    }))
  }

}

