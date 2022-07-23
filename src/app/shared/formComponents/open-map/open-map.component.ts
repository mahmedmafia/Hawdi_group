import { Component, OnDestroy } from '@angular/core';
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
export class OpenMapComponent extends BaseField implements OnDestroy {
  coordinates!: CoordinatesInterface;
  lat_long: any;
  subscription!: Subscription;

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  constructor(private dialog: MatDialog) {
    super();
  }

  openMap() {
    const dialogRef = this.dialog.open(GoogleMapComponent, {
      height: '80%',
      width: '50%'
    });

    this.subscription = dialogRef.afterClosed().subscribe(async result => {
      this.coordinates = result;
      this.lat_long =
        this.coordinates.latitude + ',' + this.coordinates.longitude;
      console.log('lat long >>', this.lat_long);

      console.log('coords >>>', this.coordinates);
      const jsonObj = JSON.stringify(this.lat_long);
      this.formControlRef.setValue(jsonObj);
      console.log('json obj >>>>', jsonObj);
    });
  }


}
