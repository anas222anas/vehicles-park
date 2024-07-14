import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesParkComponent } from './components/vehicles-park/vehicles-park.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { CardWithDetailsComponent } from './components/card-with-details/card-with-details.component';
import { CardCarsComponent } from './components/card-cars/card-cars.component';



@NgModule({
  declarations: [
    VehiclesParkComponent,
    CardWithDetailsComponent,
    CardCarsComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
  ]
})
export class VehiclesModule { }
