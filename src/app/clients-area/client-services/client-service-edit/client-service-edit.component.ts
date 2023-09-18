import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConstants } from 'src/app/AppConstants';
import { TransportationVehicleFormComponent } from 'src/app/shared/components/transportation-vehicle-form/transportation-vehicle-form.component';
import {
  TransporationServiceHandlerService,
  vehicle,
} from 'src/app/shared/services/transporation-service-handler.service';

@Component({
  selector: 'app-client-service-edit',
  templateUrl: './client-service-edit.component.html',
  styleUrls: ['./client-service-edit.component.scss'],
})
export class ClientServiceEditComponent implements OnInit, AfterViewInit {
  serviceType = '';
  @ViewChild('transportationForm')
  transportationForm!: TransportationVehicleFormComponent;
  constructor(
    private activatedRoute: ActivatedRoute,
    private transportationServHandler: TransporationServiceHandlerService
  ) { }
  ngAfterViewInit(): void {
    // switch (this.serviceType) {
    //   case AppConstants.services.Transportation:
    //     this.handleInitTransportationFormValues();
    //     break;
    // }

  }
  handleInitTransportationFormValues() {
    const vheicles: vehicle[] = [
      {
        bookingDuration: 2,
        brand: '1',
        destinationFrom: 'asaa',
        destinationTo: 'asa',
        city: '2',
        model: '2',
        type: '2',
        startDate: '2022-05-15',
        notes: 'sad',
        documents: ['h.jpg', 's.pdf']
      },
    ];
    const vheiclesValues = vheicles.map(res => {
      return {
        ...res,
        hasNotes: res.notes ? true : false,
        hasDocuments: res.documents&& res.documents.length ? true : false
      }
    })
      this.transportationServHandler.onVheicleFormUpdate.next(vheiclesValues);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      //get Service
      //get Service Type
      //Service Type =='Transportation'
      this.serviceType = res.ServType || 'Transportation';
      switch (this.serviceType) {
        case AppConstants.services.Transportation:
          this.handleInitTransportationFormValues();
          break;
        default:
      }
    });
  }
  get isTransportation() {
    return this.serviceType == AppConstants.services.Transportation;
  }
  onEdit(event: any) {
    console.log(event);
  }

}
