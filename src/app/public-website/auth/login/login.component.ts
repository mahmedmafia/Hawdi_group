import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseForm } from 'src/app/shared/components/baseForm';
import { CustomValidators } from 'src/app/shared/components/custom-validators';
import { Validators } from 'src/app/shared/components/validators';
import { FormField, FormValidatorService } from 'src/app/shared/services/form-validator.service';
import { AuthSerice } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseForm implements OnInit {
  loginForm!: FormGroup;
  constructor(public formValidator: FormValidatorService, private authServ: AuthSerice) {
    super()
  }

  ngOnInit(): void {
    this.loginForm = this.formValidator.createForm(Object.values(this.controllers));
    this.fromControllers = this.loginForm;
    this.fieldObject = this.controllers;
  }
  controllers: { [key: string]: FormField } = {

    phone: {
      fieldName: 'phone',
      defaultValue: '',
      displayName: 'Phone',
      fieldType: 'tel',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
        // {
        //   validatorFn: Validators.pattern(this.patterns.phonePattern),
        //   message: this.validationMsg.phonePattern,
        // },
      ],
    },

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

  };
  onSubmit() {
    try {
      if (this.loginForm.invalid) {
        this.formValidator.forceShowErrors();
        return;
      }
      // const res=await someService to login;
      let res = { success: true, token: '151251@%^asas', userData: this.loginForm.value }
      if (res.success) {
        this.authServ.login(res.token, res.userData);
      }
    } catch (err) {

    }
  }
}
