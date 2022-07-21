import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss']
})
export class TestimonialSectionComponent implements OnInit {
  navLeftText = ` <span class="navbtn icon-container">
  <i class="fa fa-arrow-circle-left fa-3x "  aria-hidden="true"> </i>
</span>`;
  navRightText = ` <span class="navbtn icon-container">
<i class="fa fa-arrow-circle-right fa-3x "  aria-hidden="true"> </i>
</span>`;
options: OwlOptions;
descCont="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem api";
  testimonialSliders:testimonialSlide[]=[
    {image:'../../../../../assets/3347022_orig.jpg',clientName:'Client Name',companyName:'comp1',desc:this.descCont,reviewNum:5},
    {image:'../../../../../assets/3347022_orig.jpg',clientName:'Client Name',companyName:'comp1',desc:this.descCont,reviewNum:4},
    {image:'../../../../../assets/3347022_orig.jpg',clientName:'Client Name',companyName:'comp1',desc:this.descCont,reviewNum:3},
    {image:'../../../../../assets/3347022_orig.jpg',clientName:'Client Name',companyName:'comp1',desc:this.descCont,reviewNum:5},
    {image:'../../../../../assets/3347022_orig.jpg',clientName:'Client Name',companyName:'comp1',desc:this.descCont,reviewNum:5}

  ];
  constructor() {
    this.options = {
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      autoplay: false,
      items: 4,
      margin: 10,
      nav: true,
      dots: false,
      autoWidth: true,
      autoHeight: false,
      navText: [this.navLeftText, this.navRightText],
      responsiveRefreshRate: 500,
      responsive: {
        0: {
          stagePadding: 0,
          nav: false,
          autoHeight: true,
          items: 1
        },
        600: {
          items: 2,
          nav: true,

        },
        900: {
          items: 3,
          loop: true,

        },
        1200: {
          items: 4,
        },
      }
    };
  }

  ngOnInit(): void {
  }

}
interface testimonialSlide{
  image:string,
  clientName:string,
  companyName:string,
  desc:string,
  reviewNum:number,
}
