import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services-guide-section',
  templateUrl: './services-guide-section.component.html',
  styleUrls: ['./services-guide-section.component.scss'],
})
export class ServicesGuideSectionComponent implements OnInit {
  options: OwlOptions;
  serviceGuideSliders: serviceSlide[] = [
    {
      image: '../../../../../assets/3347022_orig.jpg',
      title: 'Transportation',
      href: "/services/Transportation",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
    },
    {
      image: '../../../../../assets/3347022_orig.jpg',
      title: 'Hospitality',
      href: "/services/Hospitality",

      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
    },
    {
      image: '../../../../../assets/3347022_orig.jpg',
      title: 'Accommodation',
      href: "/services/Accommodation",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
    },
    {
      image: '../../../../../assets/3347022_orig.jpg',
      title: 'PCR',
      href: "/services/pcr",

      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
    },
    {
      image: '../../../../../assets/3347022_orig.jpg',
      title: 'Sadness',
      href: "/services/pcr",

      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
    },
  ];
  navLeftText=` <span class="navbtn icon-container">
  <i class="fa fa-arrow-circle-left fa-3x "  aria-hidden="true"> </i>
</span>`;
navRightText=` <span class="navbtn icon-container">
<i class="fa fa-arrow-circle-right fa-3x "  aria-hidden="true"> </i>
</span>`;
  constructor(private router:Router) {
    this.options = {
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      autoplay: false,
      items: 4,
      margin:10,
      nav:true,
      dots: false,
      autoWidth: true,
      autoHeight:false,
      navText : [this.navLeftText,this.navRightText],
      responsiveRefreshRate:500,
      responsive:{
        0 : {
          stagePadding: 0,
          nav: false,
          autoHeight: true,
          items: 1
        },
        600:{
          items:2,
          nav: true,

        },
        900:{
          items:3,
          loop:true
        },
        1200:{
          items:4
        },
      }
    };
  }

  ngOnInit(): void {
  }
  navigate(pageLink:string){
    this.router.navigate([pageLink.toLowerCase()]);
  }

}
export interface serviceSlide {
  image: string;
  desc?: string;
  href: string;
  title?: string;
  styleId?: string;
}
