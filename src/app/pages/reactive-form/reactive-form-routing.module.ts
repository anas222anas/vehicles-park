import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example1Component } from './components/example1/example1.component';

const routes: Routes = [
    {
        path: '',
        component: Example1Component,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
