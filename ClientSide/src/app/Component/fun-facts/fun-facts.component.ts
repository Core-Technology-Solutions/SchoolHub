import { Component, ElementRef, OnInit,  OnDestroy  } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.scss']
})
export class FunFactsComponent implements OnInit, OnDestroy {
  private interval: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.startCountTo();
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }

  startCountTo(): void {
    const elements = $(this.elementRef.nativeElement).find('.timer');

    elements.each((index: number, element: Element) => {
      const $element = $(element);
      const options = $element.data('countToOptions');
      this.countTo($element, options);
    });
  }

  countTo($element: any, options: any): void {
    const settings = $.extend({}, $.fn.countTo.defaults, options);
    const loops = Math.ceil(settings.speed / settings.refreshInterval);
    const increment = (settings.to - settings.from) / loops;
    let loopCount = 0;
    let value = settings.from;

    this.clearInterval(); // Clear any existing interval

    this.interval = setInterval(() => {
      value += increment;
      loopCount++;

      this.render($element, value, settings);

      if (typeof settings.onUpdate === "function") {
        settings.onUpdate.call($element, value);
      }

      if (loopCount >= loops) {
        this.clearInterval();
        value = settings.to;

        if (typeof settings.onComplete === "function") {
          settings.onComplete.call($element, value);
        }
      }
    }, settings.refreshInterval);
  }

  render($element: any, value: number, settings: any): void {
    const formattedValue = settings.formatter.call($element, value, settings);
    $element.html(formattedValue);
  }

  clearInterval(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
