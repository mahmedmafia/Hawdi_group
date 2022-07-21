import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavBarComponent } from './components/header-nav-bar/header-nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceDisplayCounterComponent } from './components/service-display-counter/service-display-counter.component';
import { BaseInputComponent } from './formComponents/base-input/base-input.component';
import { OutlineInputComponent } from './formComponents/outline-input/outline-input.component';
import { RadioComponent } from './formComponents/radio/radio.component';
import { SelectListComponent } from './formComponents/select-list/select-list.component';


@NgModule({
  declarations: [
    HeaderNavBarComponent,
    SliderComponent,
    FooterComponent,
    LogoComponent,
    HeaderComponent,
    ServiceDisplayCounterComponent,
    BaseInputComponent,
    OutlineInputComponent,
    RadioComponent,
    SelectListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderNavBarComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SliderComponent,
    FooterComponent,
    HeaderComponent,
    ServiceDisplayCounterComponent,
    BaseInputComponent,
    OutlineInputComponent,
    RadioComponent,
    SelectListComponent

  ]
})
export class SharedModule { }
