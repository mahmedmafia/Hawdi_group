import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransporationServiceHandlerService {
  vheicleFormSubjcet:BehaviorSubject<any>=new BehaviorSubject<any>(0);
  constructor() { }
  onVheicleFormInit(numberOFVheicles:number){
    this.vheicleFormSubjcet.next(numberOFVheicles);
  }
  recieveFormVheicleNumber(){
    return this.vheicleFormSubjcet;
  }
}
