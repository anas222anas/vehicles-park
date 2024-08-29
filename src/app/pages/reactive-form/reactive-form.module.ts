import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './components/example1/example1.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    Example1Component
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule
  ]
})
export class ReactiveFormModule { }
