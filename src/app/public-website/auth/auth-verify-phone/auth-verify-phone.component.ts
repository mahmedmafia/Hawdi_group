import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseForm } from 'src/app/shared/components/baseForm';
import { CustomValidators } from 'src/app/shared/components/custom-validators';
import { Validators } from 'src/app/shared/components/validators';
import { FormField, FormValidatorService } from 'src/app/shared/services/form-validator.service';
import { timer } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthSerice } from '../auth.service';
@Component({
  selector: 'app-auth-verify-phone',
  templateUrl: './auth-verify-phone.component.html',
  styleUrls: ['./auth-verify-phone.component.scss']
})
export class AuthVerifyPhoneComponent extends BaseForm implements OnInit {
  verifyCodeForm!: FormGroup;
  registerdPhone:string='';
  constructor(public formValidator: FormValidatorService,private authServ:AuthSerice) {
    super();
  }
  controllers: { [key: string]: FormField } = {
    code: {
      fieldName: 'code',
      displayName: 'Verification Code',
      fieldType: 'text',
      defaultValue: '',
      validators: [
        {
          validatorFn: CustomValidators.requiredNumber,
          message: this.validationMsg.requiredNumber,
        },
        {
          validatorFn: Validators.minLength(6),
          message: this.validationMsg.minLength + '6',
        },
      ],
    },
  }
  ngOnInit(): void {
    const registerData=this.authServ.getRegisterData();
    if(!registerData) //do some action
    this.registerdPhone=registerData!.phone;
    this.verifyCodeForm = this.formValidator.createForm(Object.values(this.controllers));
    this.fromControllers = this.verifyCodeForm;
    this.fieldObject = this.controllers;
  }

  phoneVerifyClicked: boolean = false;
  sendCodeClicked: boolean = false;
  verifyFailed = null;
  timer: any;
  invalid = false;
  async onSubmit() {
    try {
      if (!this.verifyCodeForm.valid) {
        this.formValidator.forceShowErrors();
        return;
      }
      await this.verifyCode();
    } catch (err:any) {
      this.verifyFailed = err.message;
    }
  }
  clearForm() {
    this.verifyCodeForm.reset();
  }
  async reSendCode() {
      this.sendCodeClicked = true;
      await this.sendCode();
      let count = 30;
      this.timer = timer(0, 1000).pipe(
        take(count),
        map(() => --count),
        tap((res) => {
          if (res == 0) this.sendCodeClicked = false;
        })
      );

  }
  async verifyCode() {
    try{
    throw new Error('Verify Api Not Implemented');
    }catch(err:any){
      this.verifyFailed=err.message;
      this.formValidator.addError(
        'code',
        'invalid',
        err.message
      );
      this.verifyCodeForm.controls['code'].setErrors({ invalid: err.message });
      this.formValidator.ShowErrors();
    }
  }
  async sendCode(){
    try{
      throw new Error('Send Api Not Implemented');
      }catch(err:any){
        this.formValidator.addError(
          'code',
          'invalid',
          err.message
        );
        this.verifyCodeForm.controls['code'].setErrors({ invalid: err.message });
        this.formValidator.ShowErrors();
      }
  }
}
