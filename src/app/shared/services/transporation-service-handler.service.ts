import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransporationServiceHandlerService {
  vheicleFormSubjcet:BehaviorSubject<any>=new BehaviorSubject<any>(0);
  onVheicleFormUpdate:BehaviorSubject<any>=new BehaviorSubject<any>(null);
  constructor() { }
  onVheicleFormInit(numberOFVheicles:any){
    this.vheicleFormSubjcet.next(numberOFVheicles);
  }
  recieveFormVheicleNumber(){
    return this.vheicleFormSubjcet;
  }

}
export interface vehicle{

  bookingDuration:number;
  brand:any;
  city:any;
  destinationFrom:string;
  destinationTo:string;
  model:any;
  notes?:string;
  documents?:string[];
  startDate:string;
  type:any;
}
