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
import { ClientsAreaStatsComponent } from './components/clients-area-stats/clients-area-stats.component';
import {MatTableModule } from '@angular/material/table';
import { DateNowComponent } from './formComponents/date-now/date-now.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OpenMapComponent } from './formComponents/open-map/open-map.component';
import { GoogleMapComponent } from './formComponents/google-map/google-map.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TransportationVehicleFormComponent } from './components/transportation-vehicle-form/transportation-vehicle-form.component';
import { FileInputComponent } from './formComponents/file-input/file-input.component';
import { ServiceItemCostComponent } from './components/service-item-cost/service-item-cost.component';


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
    SelectListComponent,
    ClientsAreaStatsComponent,
    DateNowComponent,
    OpenMapComponent,
    GoogleMapComponent,
    TransportationVehicleFormComponent,
    FileInputComponent,
    ServiceItemCostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    GooglePlaceModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule


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
    SelectListComponent,
    ClientsAreaStatsComponent,
    MatTableModule,
    DateNowComponent,
    OpenMapComponent,
    MatSnackBarModule,
    TransportationVehicleFormComponent,
    FileInputComponent,
    LogoComponent,


  ]
})
export class SharedModule { }
