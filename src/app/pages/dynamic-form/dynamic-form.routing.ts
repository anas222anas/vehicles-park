import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDynamicFormComponent } from './components/view-dynamic-form/view-dynamic-form.component';
import { CreateDynamicFormComponent } from './components/create-dynamic-form/create-dynamic-form.component';

const routes: Routes = [
            {
                path: 'create',
                component: CreateDynamicFormComponent
            },
            {
                path: 'view',
                component: ViewDynamicFormComponent
            },
            {
                path: '',
                redirectTo: 'view',
                pathMatch: 'prefix'
            },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DynamicFormRoutingModule { }
