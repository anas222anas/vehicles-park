import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LANGUAGE } from '../../../shared/components/language/language.component';
import { TranslateService } from '@ngx-translate/core';
interface SidnavItem{
  text: string;
  isActive: boolean;
  urlImg: string
}
@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent implements OnInit{
  isEnglish = true
  sidnavItems!: SidnavItem[]
  constructor(private router: Router, private route: ActivatedRoute, private language: TranslateService){
    this.sidnavItems = [
      {text: 'Home', isActive: true, urlImg: 'assets/home.svg'},
      {text: 'Operation', isActive: false, urlImg: 'assets/transaction.svg'},
      {text: 'Map', isActive: false, urlImg: 'assets/map.svg'},
      {text: 'Reports', isActive: false, urlImg: 'assets/report.png'},
      {text: 'Control Panel', isActive: false, urlImg: 'assets/panel.png'}
    ]
  }
  ngOnInit(): void {
    this.language.onLangChange.subscribe(lang => {
      this.isEnglish = lang.lang == LANGUAGE.English
    })
  }

  acivated(index: number){
    this.sidnavItems.forEach((element, i) => {
      this.sidnavItems[i].isActive = false
    });
    this.sidnavItems[index].isActive = true
  }
}
