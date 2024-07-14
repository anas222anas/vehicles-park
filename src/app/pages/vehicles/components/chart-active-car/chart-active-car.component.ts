import { Component } from '@angular/core';
export class LanguageData {
  language!: string;

  percent!: number;
}
@Component({
  selector: 'app-chart-active-car',
  templateUrl: './chart-active-car.component.html',
  styleUrl: './chart-active-car.component.scss'
})
export class ChartActiveCarComponent {
  internetLanguages: LanguageData[] = [
    {
      language: 'Active Vehicles',
      percent: 60,
    }, {
      language: 'In-Active Vehicles',
      percent: 40,
    }];
    customizeLabel(point: any) {
      return `${point.argumentText}: ${point.valueText}%`;
    }
}
