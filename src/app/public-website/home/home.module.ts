import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutSectionComponent } from './about-section/about-section.component';
import { HeaderInfoComponent } from './home-header/header-info/header-info.component';
import { HeaderBottomComponent } from './home-header/header-bottom/header-bottom.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { ServicesGuideSectionComponent } from './services-guide-section/services-guide-section.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FAQsSectionComponent } from './faqs-section/faqs-section.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';
import { ContactUsSectionComponent } from './contact-us-section/contact-us-section.component';
const homeRoute:Route[]=[
  {
    path:'',
    component:HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutSectionComponent,
    HeaderBottomComponent,
    HomeHeaderComponent,
    HeaderInfoComponent,
    ServicesGuideSectionComponent,
    FAQsSectionComponent,
    TestimonialSectionComponent,
    ContactUsSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    RouterModule.forChild(homeRoute),
  ],
  exports:
  [
    TestimonialSectionComponent
  ]
})
export class HomeModule { }
