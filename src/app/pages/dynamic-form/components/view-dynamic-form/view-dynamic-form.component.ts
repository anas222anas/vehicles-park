import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicControlService } from '../../services/dynamic-control.service';
import { Store } from '@ngxs/store';
import { GetConfigForDynamicFormAction } from '../../state/dynamic-form.actions';
import { DynamicFormState } from '../../state/dynamic-form.state';
import { CUSTOM_INPUT_MODEL } from '../../models/custom-input.model';


@Component({
  selector: 'app-view-dynamic-form',
  templateUrl: './view-dynamic-form.component.html',
  styleUrl: './view-dynamic-form.component.scss'
})
export class ViewDynamicFormComponent {
  viewFormConfig: CUSTOM_INPUT_MODEL[] = []
  viewFormGroup: FormGroup
  constructor(private dynamicControlService: DynamicControlService, private store: Store) {
    this.store.dispatch(new GetConfigForDynamicFormAction())
    this.viewFormConfig = this.store.selectSnapshot(DynamicFormState.config);
    this.viewFormGroup = this.dynamicControlService.toFormGroup(this.viewFormConfig);
  }
  ngOnInit(): void {

  }

  onSubmit() {
    this.viewFormGroup.markAllAsTouched()
    this.viewFormGroup.updateValueAndValidity()
    console.log(this.viewFormGroup.value)
  }
  initConfigForView(config: CUSTOM_INPUT_MODEL[]): CUSTOM_INPUT_MODEL[] {
    const temp: CUSTOM_INPUT_MODEL[] = [...config]
    temp.forEach(current => {
        current.required = false
        current.readonly = true
        if(!current.defaultValue)
          current.disabled = true
    })
    return temp
  }
}
