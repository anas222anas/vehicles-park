import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RandomAnimationService {

  constructor() {
  }

  /**
   * this function blurred 'parents' and set random 'transform' to elements
   * @param elements array of elements that we need to animate it
   * @param parents array of element parents
   * @param duration duration of animate (default = 1000ms = 1s)
   * @param blur degree of blur (default = 5px)
   */

  beginAnimate(elements: any, parents: any, duration: number = 1000, blur: number = 5) {
    for (let i = 0; i < elements._results.length; i++) {
      const ele = elements._results[i].nativeElement;
      ele['style'].transform = this.getRandomTransform()
      ele['style'].transition = 'all ' + duration + 'ms ease-in-out';
    }
    for (let i = 0; i < parents._results.length; i++) {
      const parent = parents._results[i].nativeElement;
      parent['style'].transition = 'all ' + duration + 'ms ease-in-out';
      parent['style']['backdrop-filter'] = 'blur(' + blur + 'px)';
    }
    setTimeout(() => {
      for (let i = 0; i < elements._results.length; i++) {
        const ele = elements._results[i].nativeElement;
        ele['style'].transform = '';
      }
      for (let i = 0; i < parents._results.length; i++) {
        const parent = parents._results[i].nativeElement;
        parent['style']['backdrop-filter'] = '';
      }
    }, 1);
  }

  private getRandomTransform() {
    const arr = ['translateX(-' + 100 + '%)', 'translateY(-' + 100 + '%)',
      'translateX(' + 100 + '%)', 'translateY(' + 100 + '%)'];
    return arr[Math.round(Math.random()) % 4] + ' ' + arr[Math.round(Math.random()) % 4];
  }
}
