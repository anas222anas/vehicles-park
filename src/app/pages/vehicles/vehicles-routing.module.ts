import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VehiclesParkComponent } from "./components/vehicles-park/vehicles-park.component";

const routes: Routes = [
    {
      path: '',
      component: VehiclesParkComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class VehiclesRoutingModule { }
  