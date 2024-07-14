import { Component, Input } from '@angular/core';
export interface CardWithDeatilsModel{
  img: string;
  value: string | number;
  description: string;
}
@Component({
  selector: 'app-card-with-details',
  templateUrl: './card-with-details.component.html',
  styleUrl: './card-with-details.component.scss'
})
export class CardWithDetailsComponent {
  @Input('data') data!: CardWithDeatilsModel
}
