import { AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
interface CarsItemsModel {
  name: string;
  camera: string;
  wifi: string;
  memory: string;
  cpu: string;
  color: string;
}
export interface CardCarsModel {
  title: string;
  cars: CarsItemsModel[]
}
@Component({
  selector: 'app-card-cars',
  templateUrl: './card-cars.component.html',
  styleUrl: './card-cars.component.scss'
})
export class CardCarsComponent implements OnInit, AfterContentChecked{
  constructor(private changeDetector: ChangeDetectorRef){

  }
  ngOnInit(): void {
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges()
  }
  @Input('data') data!: CardCarsModel
  changeDetected(){
    this.changeDetector.detectChanges()
  }
}
