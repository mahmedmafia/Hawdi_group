import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BaseForm, formControllers } from 'src/app/shared/components/baseForm';
import { CustomValidators } from 'src/app/shared/components/custom-validators';
import { Validators } from 'src/app/shared/components/validators';
import {
  FormField,
  FormValidatorService,
} from 'src/app/shared/services/form-validator.service';
import { TransporationServiceHandlerService } from 'src/app/shared/services/transporation-service-handler.service';

@Component({
  selector: 'app-transportation-add-booking',
  templateUrl: './transportation-add-booking.component.html',
  styleUrls: ['./transportation-add-booking.component.scss'],
})
export class TransportationAddBookingComponent
  extends BaseForm
  implements OnInit {
  transportationServiceForm!: FormGroup;
  vheiclesAdded:boolean=false;
  constructor(public formValidator: FormValidatorService,private fb:FormBuilder,private transportationServ:TransporationServiceHandlerService) {
    super();
  }
  transportationControllers: formControllers = {
    vehicleNumbers: {
      displayName: 'Number of vehicles?',
      fieldName: 'vehicleNumbers',
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
    isSameDestination: {
      fieldName: 'isSameDestination',
      displayName: 'Same destination?',
      defaultValue: true,
      fieldValues: [{ name: 'Yes', value: true }, { name: 'No', value: false }]
    }
  };
  ngOnInit(): void {
    this.transportationServiceForm = this.formValidator.createForm(Object.values(this.transportationControllers));
    this.fromControllers = this.transportationServiceForm;
    this.fieldObject = this.transportationControllers;
  }
  onSubmit() {
    if (!this.transportationServiceForm.valid) {
      this.formValidator.forceShowErrors();
      return;
    }
    const vehicleNumbers=this.transportationServiceForm.value.vehicleNumbers;
    console.log(vehicleNumbers);
    this.transportationServ.onVheicleFormInit(vehicleNumbers);
    this.vheiclesAdded=true;
    // this.initializeVehiclesForm(vehicleNumbers);
  }
}

