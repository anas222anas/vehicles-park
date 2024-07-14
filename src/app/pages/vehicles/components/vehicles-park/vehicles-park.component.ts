import { Component, OnInit } from '@angular/core';
import { CardWithDeatilsModel } from '../card-with-details/card-with-details.component';
import { CardCarsModel } from '../card-cars/card-cars.component';

@Component({
  selector: 'app-vehicles-park',
  templateUrl: './vehicles-park.component.html',
  styleUrl: './vehicles-park.component.scss'
})
export class VehiclesParkComponent implements OnInit{
  cardWithDeatils1: CardWithDeatilsModel = {img: '../../../../../assets/logo.png', value: '2,108', description: 'Total Violations'}
  cardWithDeatils2: CardWithDeatilsModel = {img: '../../../../../assets/note-search.png', value: '100,000', description: 'Total Dectations'}
  cardWithDeatils3: CardWithDeatilsModel ={img: '../../../../../assets/car.png', value: '48', description: 'Total Actives Vehocles'}
  cardWithDeatils4: CardWithDeatilsModel ={img: '../../../../../assets/distance.png', value: '50,000', description: 'Total Distance in KM'}
  ngOnInit(): void {
  }
  cars: CardCarsModel = {
    title: 'VPark Fleet',
    cars: [
      {name: 'Smart Vehicles 1', camera: 'Online', wifi: 'Available', memory: '20%', cpu: '70', color: 'orange'},
      {name: 'Smart Vehicles 2', camera: 'Online', wifi: 'Available', memory: '20%', cpu: '70', color: 'orange'},
      {name: 'Smart Vehicles 3', camera: 'Online', wifi: 'Available', memory: '20%', cpu: '70', color: 'orange'},
      {name: 'Smart Vehicles 4', camera: 'Online', wifi: 'Available', memory: '20%', cpu: '70', color: 'orange'},
      {name: 'Smart Vehicles 5', camera: 'Online', wifi: 'Available', memory: '20%', cpu: '70', color: 'orange'},
      {name: 'Smart Vehicles 6', camera: 'Online', wifi: 'Available', memory: '20%', cpu: '70', color: 'orange'},
      {name: 'Smart Vehicles 7', camera: 'Online', wifi: 'Available', memory: '20%', cpu: '70', color: 'orange'},
      {name: 'Smart Vehicles 8', camera: 'Online', wifi: 'Available', memory: '20%', cpu: '70', color: 'orange'},
      {name: 'Smart Vehicles 9', camera: 'Online', wifi: 'Available', memory: '20%', cpu: '70', color: 'orange'},
      {name: 'Smart Vehicles 10', camera: 'Online', wifi: 'Available', memory: '20%', cpu: '70', color: 'orange'},
      {name: 'Smart Vehicles 11', camera: 'Online', wifi: 'Available', memory: '20%', cpu: '70', color: 'orange'}
    ]
  }

}
