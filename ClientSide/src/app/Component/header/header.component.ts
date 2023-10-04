import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  customOptions: OwlOptions = {
    center: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    items: 1,
    loop: true,
    navSpeed: 700,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    margin: 30,
    responsive: {
      992: {
        items: 1
      },
      1200: {
        items: 1
      }
    },
  }
}


