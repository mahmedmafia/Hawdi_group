import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseForm } from 'src/app/shared/components/baseForm';
import { CustomValidators } from 'src/app/shared/components/custom-validators';
import { Validators } from 'src/app/shared/components/validators';
import { FormField, FormValidatorService } from 'src/app/shared/services/form-validator.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent extends BaseForm implements OnInit {

  forgetPasswordForm!: FormGroup;
  constructor(public formValidator: FormValidatorService) {
    super();
  }
  controllers: { [key: string]: FormField } = {
    password: {
      fieldName: 'password',
      fieldType: 'password',
      displayName: 'Password',
      defaultValue: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
        {
          validatorFn: Validators.minLength(8),
          message: this.validationMsg.minLength + '8',
        },
        {
          validatorFn: CustomValidators.complexPassword('s'),
          message: this.validationMsg.complexPassword,
        },
      ],
    },
    confirmPassword: {
      fieldName: 'confirmPassword',
      fieldType: 'password',
      displayName: 'Confirm Password',
      defaultValue: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
        {
          validatorFn: CustomValidators.confirmPasswordWith('password'),
          message: this.validationMsg.confirmValue + 'password',
        },
      ],
    },
  }
  ngOnInit(): void {
    this.forgetPasswordForm = this.formValidator.createForm(Object.values(this.controllers));
    this.fromControllers = this.forgetPasswordForm;
    this.fieldObject = this.controllers;
  }

  onSubmit() {

  }
}
