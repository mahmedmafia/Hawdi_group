import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseForm, formControllers } from 'src/app/shared/components/baseForm';
import { CustomValidators } from 'src/app/shared/components/custom-validators';
import { Validators } from 'src/app/shared/components/validators';
import { FormField, FormValidatorService } from 'src/app/shared/services/form-validator.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent extends BaseForm implements OnInit {
  resetPasswordForm!: FormGroup;
  isEmailSent: boolean = false;
  constructor(public formValdiator: FormValidatorService) {
    super();
  }
  controllers: formControllers = {
    "email": {
      displayName: 'Email',
      fieldName: 'email',
      defaultValue: '',
      validators: [
        { validatorFn: Validators.required, message: this.validationMsg.required },
        { validatorFn: Validators.email, message: this.validationMsg.invalidEmail }
      ]
    }
  }
  ngOnInit(): void {
    this.resetPasswordForm = this.formValdiator.createForm(Object.values(this.controllers));
    this.fromControllers = this.resetPasswordForm;
    this.fieldObject = this.controllers;
  }
  submit() {
    if(!this.resetPasswordForm){
      this.formValdiator.forceShowErrors();
      return;
    }


    this.isEmailSent=true;
    this.resetPasswordForm.reset();
  }

}
