import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        children: [
            {
                path: 'vehicles',
                loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule)
            },
            {
                path: 'reactive-form',
                loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
            },
            {
                path: 'dynamic-form',
                loadChildren: () => import('./dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
            },
            {
                path: 'series-movies',
                loadChildren: () => import('./series-movies/series-movies.module').then(m => m.SeriesMoviesModule)
            }
            
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
