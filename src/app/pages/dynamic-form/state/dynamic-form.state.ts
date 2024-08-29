import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetConfigForDynamicFormAction, SetConfigForDynamicFormAction } from './dynamic-form.actions';
import { get } from 'lodash';
import { CUSTOM_INPUT_MODEL } from '../models/custom-input.model';

export class DynamicFormStateModel {
    public config!: CUSTOM_INPUT_MODEL[];
}

const defaults = {
    config: []
};

@State<DynamicFormStateModel>({
    name: 'form',
    defaults
})
@Injectable()
export class DynamicFormState {
    @Selector()
    static config(state: DynamicFormState): CUSTOM_INPUT_MODEL[] {
        return get(state, 'config') || [];
    }
    @Action(SetConfigForDynamicFormAction)
    add({ getState, setState, patchState }: StateContext<DynamicFormStateModel>, { payload }: SetConfigForDynamicFormAction) {
        const state = getState();
        patchState({
            config: [...payload] as CUSTOM_INPUT_MODEL[]
        });
    }

    @Action(GetConfigForDynamicFormAction)
    get({ getState, setState, patchState }: StateContext<DynamicFormStateModel>) {
        const state = getState();
        // patchState({
        //     config: [
        //         {
        //             type: 'text', key: 'fitst-name', label: 'First Name',
        //             placeholder: 'Enter First Name', required: true, defaultValue: 'Anas', readonly: false
        //         },
        //         {
        //             type: 'text', key: 'last-name', label: 'Last Name',
        //             placeholder: 'Enter Last Name', required: false, defaultValue: 'Zidan', maxLength: 10, minLength: 2
        //         },
        //         {
        //             type: 'text', key: 'password', label: 'Password',
        //             placeholder: 'Enter Password', required: true, defaultValue: 'ae32669467ae', disabled: false
        //         },
        //         {
        //             type: 'number', key: 'age', label: 'Age',
        //             placeholder: 'Enter Age', required: true, defaultValue: 28
        //         }
        //     ] as CUSTOM_INPUT_MODEL[]
        // });
    }
}
