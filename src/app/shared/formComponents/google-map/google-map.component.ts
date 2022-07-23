import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

declare let $: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  public coordinates: CoordinatesInterface = {
    latitude: 30.044420,
    longitude: 31.235712
  };
  @ViewChild('places') places!: GooglePlaceDirective;

  constructor(
    public dialogRef: MatDialogRef<GoogleMapComponent>
  ) {
  }

  public onChange(address: Address) {
    if (address.photos && address.photos.length > 0) {
      console.dir(address.photos[0].getUrl({ maxHeight: 500, maxWidth: 500 }));
    }
    this.coordinates.latitude = address.geometry.location.lat();
    this.coordinates.longitude = address.geometry.location.lng();
  }

  ngOnInit() {
    $('.pac-container').change((event: any) => {
    });
  }

  placeMarker(event: any) {
    this.coordinates.latitude = event.coords.lat;
    this.coordinates.longitude = event.coords.lng;
  }

  async submit() {
    this.dialogRef.close(this.coordinates);
  }

}

export interface CoordinatesInterface {
  latitude: number;
  longitude: number;
}
