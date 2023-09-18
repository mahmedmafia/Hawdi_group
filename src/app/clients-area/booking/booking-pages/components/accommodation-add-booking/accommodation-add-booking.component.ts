import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BaseForm } from 'src/app/shared/components/baseForm';
import { CustomValidators } from 'src/app/shared/components/custom-validators';
import { Validators } from 'src/app/shared/components/validators';
import {
  FormField,
  FormValidatorService,
} from 'src/app/shared/services/form-validator.service';

@Component({
  selector: 'app-accommodation-add-booking',
  templateUrl: './accommodation-add-booking.component.html',
  styleUrls: ['./accommodation-add-booking.component.scss'],
})
export class AccommodationAddBookingComponent
  extends BaseForm
  implements OnInit
{
  accomodationServiceForm!: FormGroup;

  accomodationControllers: formControllers = {
    type: {
      fieldName: 'type',
      displayName: '',
      defaultValue: null,
      fieldValues: [
        { name: 'Sedan', value: '1' },
        { name: 'Coupe', value: '1' },
        { name: 'SPORTS CAR', value: '1' },
        { name: 'STATION WAGON', value: '1' },
      ],
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
      ],
    },
    brand: {
      fieldName: 'brand',
      displayName: '',
      defaultValue: null,
      fieldValues: [
        { name: 'Hundai', value: '1' },
        { name: 'Bmw', value: '2' },
        { name: 'Sad', value: '3' },
        { name: 'Hundai', value: '4' },
      ],
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
      ],
    },
    model: {
      fieldName: 'model',
      displayName: '',
      defaultValue: null,
      fieldValues: [
        { name: '2016', value: '1' },
        { name: '2017', value: '2' },
        { name: '2019', value: '3' },
        { name: '2022', value: '4' },
      ],
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
      ],
    },
    option: {
      fieldName: 'option',
      displayName: '',
      defaultValue: null,
      fieldValues: [
        { name: 'riyadh', value: '1' },
        { name: 'gaddah', value: '2' },
        { name: 'riyadh', value: '1' },
        { name: 'gaddah', value: '2' },
      ],
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
      ],
    },
    daysTotal: {
      displayName: 'Days Total',
      fieldName: 'daysTotal',
      fieldType: 'number',
      defaultValue: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
        {
          validatorFn: Validators.max(4),
          message: this.validationMsg.max + '4',
        },
        {
          validatorFn: Validators.min(1),
          message: this.validationMsg.min + '1',
        },
      ],
    },
    startDate: {
      displayName: 'Check in date?',
      fieldName: 'startDate',
      defaultValue: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
        {
          validatorFn: CustomValidators.dateInTheFuture,
          message: 'Date Should be in the Future',
        },
      ],
    },

    endDate: {
      displayName: 'Check out date?',
      fieldName: 'endDate',
      defaultValue: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
        {
          validatorFn: CustomValidators.dateInTheFuture,
          message: 'Date Should be in the Future',
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
    notes: {
      displayName: 'Do you want a....',
      fieldName: 'notes',
      defaultValue: false,
      fieldValues: [
        { name: 'Suite', value: true },
        { name: 'Room', value: false },
      ],
    },
  };

  bookingDone: boolean = false;

  constructor(
    public formValidator: FormValidatorService,
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.accomodationServiceForm = this.formValidator.createForm(
      Object.values(this.accomodationControllers)
    );

    this.fromControllers = this.accomodationServiceForm;
    this.fieldObject = this.accomodationControllers;
  }
  onSubmit() {
    if (!this.accomodationServiceForm.valid) {
      this.formValidator.forceShowErrors();
      return;
    }
  }

  reBooking() {
    this.bookingDone = false;
  }
}
export interface formControllers {
  [key: string]: FormField;
}
