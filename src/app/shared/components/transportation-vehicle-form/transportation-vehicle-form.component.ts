import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup,Validators as Val } from '@angular/forms';
import { BaseForm, formControllers } from 'src/app/shared/components/baseForm';
import { CustomValidators } from 'src/app/shared/components/custom-validators';
import { Validators } from 'src/app/shared/components/validators';
import {
  FormField,
  FormValidatorService,
} from 'src/app/shared/services/form-validator.service';
import { TransporationServiceHandlerService } from '../../services/transporation-service-handler.service';

@Component({
  selector: 'app-transportation-vehicle-form',
  templateUrl: './transportation-vehicle-form.component.html',
  styleUrls: ['./transportation-vehicle-form.component.scss']
})
export class TransportationVehicleFormComponent extends BaseForm implements OnInit {
  vehiclesForm!:FormGroup;
  isUpdate=false;
  selectedVehicle=0;
  @Output() formSumbitted:EventEmitter<any>=new EventEmitter();;
  vehicleControllers:formControllers={
    type:{
      fieldName:'type',
      displayName:'',
      defaultValue:null,
      fieldValues:[
        {name:'Sedan',value:'1'},
        {name:'Coupe',value:'2'},
        {name:'SPORTS CAR',value:'3'},
        {name:'STATION WAGON',value:'4'},
      ],
      validators:[
        {validatorFn:Validators.required,message:this.validationMsg.required}
        ]
    },
    brand:{
      fieldName:'brand',
      displayName:'',
      defaultValue:null,
      fieldValues:[
        {name:'Hundai',value:'1'},
        {name:'Bmw',value:'2'},
        {name:'Sad',value:'3'},
        {name:'Hundai',value:'4'},
      ],
      validators:[
      {validatorFn:Validators.required,message:this.validationMsg.required}
      ]
    },
    model:{
      fieldName:'model',
      displayName:'',
      defaultValue:null,
      fieldValues:[
        {name:'2016',value:'1'},
        {name:'2017',value:'2'},
        {name:'2019',value:'3'},
        {name:'2022',value:'4'},
      ],
      validators:[
        {validatorFn:Validators.required,message:this.validationMsg.required}
        ]
    },
    city:{
      fieldName:'city',
      displayName:'',
      defaultValue:null,
      fieldValues:[
        {name:'riyadh',value:'1'},
        {name:'gaddah',value:'2'},
        {name:'riyadh',value:'3'},
        {name:'makkah',value:'4'},
      ],
      validators:[
        {validatorFn:Validators.required,message:this.validationMsg.required}
        ]
    },
    bookingDuration: {
      displayName: 'Number of days?',
      fieldName: 'bookingDuration',
      fieldType: 'number',
      defaultValue: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
        {
          validatorFn: Validators.max(4),
          message: this.validationMsg.max + '4'
        },
        {
          validatorFn: Validators.min(1),
          message: this.validationMsg.min + '1'
        }
      ],
    },
    startDate: {
      displayName: 'Chose starting date.',
      fieldName: 'startDate',
      defaultValue: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
        {
          validatorFn: CustomValidators.dateInTheFuture,
          message:"Date Should be in the Future"
        },

      ],
    },
    destinationFrom: {
      displayName: 'Destination from',
      fieldName: 'destinationFrom',
      defaultValue: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
      ],
    },
    destinationTo: {
      displayName: 'Destination to',
      fieldName: 'destinationTo',
      defaultValue: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
      ],
    },
    hasNotes: {
      displayName: 'Do you have any notes?',
      fieldName: 'hasNotes',
      defaultValue: false,
      fieldValues: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
    },
    notes:{
      displayName: '',
      fieldName: 'notes',
      defaultValue: '',
    },
    hasDocuments: {
      displayName: 'Extra documentations to attach?',
      fieldName: 'hasDocuments',
      defaultValue: false,
      fieldValues: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
    },
    documents:{
      displayName: '',
      fieldName: 'documents',
      defaultValue: [],
    },
  }

  constructor(public formValidator: FormValidatorService,private fb:FormBuilder,private transportationServ:TransporationServiceHandlerService) {
    super();
  }
  ngOnInit(): void {
    this.vehiclesForm=this.fb.group({
      vehicles:this.fb.array([])
    });

    this.transportationServ.vheicleFormSubjcet.subscribe(res=>{
      const lengthDiff=res-this.vehiclesArr.length
      if(lengthDiff>0){
        this.initializeVehiclesForm(lengthDiff);
      }else{
        const lenDiff=this.vehiclesArr.length-res;
        this.vehiclesArr.controls.splice(0,lenDiff);
      }
    });
    this.transportationServ.onVheicleFormUpdate.subscribe(res=>{
      this.initializeVehiclesForm(res.length);
      this.isUpdate=true;
      this.vehiclesArr.setValue(res);

    })
  }


  onSubmit() {
    if(this.vehiclesForm.invalid){
      this.formValidator.forceShowErrors();
      return;
    }
    this.formSumbitted.emit(this.vehiclesForm.value);

  }
  initializeVehiclesForm(vehicleNumbers:number){

    for(let i=0;i<vehicleNumbers;i++){
      this.addVehicle();
    }
  }
  addVehicle(){
    this.vehiclesArr.push(this.formValidator.createForm(Object.values(this.vehicleControllers)));
  }
  get vehiclesArr(){
    return this.vehiclesForm.controls['vehicles'] as FormArray;
  }
  removeItems(i: number) {
    this.vehiclesArr.removeAt(i);

  }
  convertVehiclesControls(index:number,key:string){
    return this.vehiclesArr.controls[index].get(key) as FormControl;
  }
  convertVehiclesObject(key:string){
    return this.vehicleControllers[key];
  }
  onSwitchVehicle(index:number){
    this.selectedVehicle=index;
  }
 onNotesChanged(event:any,controlIndex:number){
  const control= this.convertVehiclesControls(controlIndex,'notes');
  if(event==true){
    control.setValidators([Val.required]);
    control.markAllAsTouched();

  }else{
    control.reset();
  }
  control.updateValueAndValidity();
 }
 onDocumentsChanged(event:any,controlIndex:number){
  const control= this.convertVehiclesControls(controlIndex,'documents');
  if(event==true){
    control.setValidators([Val.required]);
    control.markAllAsTouched();

  }else{
    control.reset();
  }
  control.updateValueAndValidity();
 }
}
