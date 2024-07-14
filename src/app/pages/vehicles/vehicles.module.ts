import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesParkComponent } from './components/vehicles-park/vehicles-park.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { CardWithDetailsComponent } from './components/card-with-details/card-with-details.component';
import { CardCarsComponent } from './components/card-cars/card-cars.component';
import { ChartActiveCarComponent } from './components/chart-active-car/chart-active-car.component';
import { DxPieChartModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    VehiclesParkComponent,
    CardWithDetailsComponent,
    CardCarsComponent,
    ChartActiveCarComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    DxPieChartModule
  ]
})
export class VehiclesModule { }
