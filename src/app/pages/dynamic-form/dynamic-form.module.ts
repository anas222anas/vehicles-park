import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDynamicFormComponent } from './components/view-dynamic-form/view-dynamic-form.component';
import { DynamicFormRoutingModule } from './dynamic-form.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormRoutingModule } from '../reactive-form/reactive-form-routing.module';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CreateDynamicFormComponent } from './components/create-dynamic-form/create-dynamic-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { DynamicFormState } from './state/dynamic-form.state';
import { CreateCustomInputDialogComponent } from './components/create-custom-input-dialog/create-custom-input-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SelectOptionsComponent } from './components/select-options/select-options.component';


@NgModule({
  declarations: [
    ViewDynamicFormComponent,
    CustomInputComponent,
    CreateDynamicFormComponent,
    CreateCustomInputDialogComponent,
    SelectOptionsComponent
  ],
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    MatButtonModule,
    ReactiveFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    HttpClientModule,
    NgxsModule.forFeature([DynamicFormState]),

  ],
  providers: [provideNativeDateAdapter()]
})
export class DynamicFormModule { }
