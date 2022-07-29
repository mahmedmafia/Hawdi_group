import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
// import { CoordinatesInterface } from '../../../../dashboard/seller/seller';
import { BaseField } from '../../components/baseField';

import { CoordinatesInterface, GoogleMapComponent } from '../google-map/google-map.component';

@Component({
  selector: 'app-open-map',
  templateUrl: './open-map.component.html',
  styleUrls: ['./open-map.component.scss']
})
export class OpenMapComponent extends BaseField implements OnDestroy,OnInit {
  coordinates!: CoordinatesInterface;
  lat_long: any;
  subscription!: Subscription;

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  constructor() {
    super();
  }
  ngOnInit(): void {
    if(this.isUpdate){
      this.lat_long=this.formControlRef.value;
    }
  }




}
