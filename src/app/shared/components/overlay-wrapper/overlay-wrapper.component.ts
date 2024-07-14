import { Component } from '@angular/core';

@Component({
  selector: 'app-overlay-wrapper',
  templateUrl: './overlay-wrapper.component.html',
  styleUrls: ['./overlay-wrapper.component.scss'],
  animations: [
    // elementInOutAnimation(350)
  ]
})
export class OverlayWrapperComponent {
  // isOpen = false;
  // justOpen=false;
  // @Input() width=100;
  // @Input()  height=100;
  // @Input()  reverseOpen=true;
  //  dir;
  // dir$=ObjectUtils.getDirection$();
  //  @HostListener('document:click', ['$event.target'])
  //  onClick() {
  //   if(this.justOpen)
  //     this.justOpen=false;
  //   else
  //     this.isOpen=false;
  //  }
  //  subscription:Subscription=new Subscription();
  //  constructor(){
  //   if(this.reverseOpen)
  //     this.dir =ObjectUtils.getDirection()=='ltr'?'rtl':'ltr';
  //     else
  //     this.dir =ObjectUtils.getDirection();
  //  }
  //  ngOnInit(): void {
  //    this.subscription.add(this.dir$.subscribe(dir => {
  //      this.dir=dir=='ltr'?'rtl':'ltr';
  //    }));

  //  }
  //  ngOnDestroy(): void {
  //      this.subscription.unsubscribe();
  //  }

  // changeOpen(e:Event){
  //   if(!this.isOpen){
  //     this.justOpen=true;
  //   }
  //     this.isOpen=!this.isOpen;


  // }
}
