import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators as Val,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BaseForm } from 'src/app/shared/components/baseForm';
import { CustomValidators } from 'src/app/shared/components/custom-validators';
import { Validators } from 'src/app/shared/components/validators';
import {
  FormField,
  FormValidatorService,
} from 'src/app/shared/services/form-validator.service';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss'],
})
export class RegisterationComponent extends BaseForm implements OnInit {
  backGroundImage='../../../assets/images/business-handshake-on-grey-background-rwwgm2k-2ml.jpg';
  registerationForm!: FormGroup;

  authorities = ['health', 'money'];
  constructor(public formValidator: FormValidatorService,private router:Router) {
    super();
  }
  userTypeEnum = userType;
  selectedUserType: userType = this.userTypeEnum.GovernmentSector;
  controllers: {[key:string]:FormField} = {
    name: {
      fieldName: 'name',
      displayName: 'Name',
      fieldType: 'text',
      defaultValue: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
        {
          validatorFn: Validators.minLength(6),
          message: this.validationMsg.minLength + '6',
        },
      ],
    },
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
        {
          validatorFn: Validators.pattern(this.patterns.phonePattern),
          message: this.validationMsg.phonePattern,
        },
      ],
    },
    email: {
      fieldName: 'email',
      defaultValue: '',
      displayName: 'Email',
      fieldType: 'email',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
        {
          validatorFn: Validators.email,
          message: this.validationMsg.invalidEmail,
        },
      ],
    },
    userType: {
      fieldName: 'userType',
      defaultValue: this.selectedUserType,
      fieldValues: [
        { value: this.userTypeEnum.Entity },
        { value: this.userTypeEnum.GovernmentSector },
      ],
      displayName: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
      ],
    },
    companyName: {
      fieldName: 'companyName',
      defaultValue: '',
      displayName: 'Company Name',
    },
    authority: {
      fieldName: 'authority',
      defaultValue: null,
      fieldValues: this.authorities.map(res=>{
        return {value:res};
      }),
      displayName:'',
    },
    NationalUnifiedNo: {
      fieldName: 'NationalUnifiedNo',
      displayName: 'National Unified No.',
      defaultValue: '',
      validators: [
        {
          validatorFn: Validators.required,
          message: this.validationMsg.required,
        },
        {
          validatorFn: Validators.minLength(17),
          message: this.validationMsg.minLength + '17',
        },
        {
          validatorFn: Validators.maxLength(17),
          message: this.validationMsg.maxLength + '17',
        },
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
    policy: {
      fieldName: 'policy',
      displayName: '',
      fieldValues:[
        {value:true,name:'I agree on service terms and conditions'},
      ],
      defaultValue: false,
      validators: [
        {
          validatorFn: Validators.requiredTrue,
          message: this.validationMsg.required,
        },
      ],
    },
  };
  ngOnInit(): void {
    this.registerationForm = this.formValidator.createForm(
      Object.values(this.controllers)
    );
    this.fromControllers = this.registerationForm;
    this.fieldObject = this.controllers;
    this.registerationForm
      .get('userType')
      ?.valueChanges.subscribe((res: userType) => {
        this.selectedUserType = res;
     this.addValidatorBasedOnType(res);
      });
  }
  addValidatorBasedOnType(type: string) {
    let selectedControl = null;
    let otherControl = null;
    switch (type) {
      case userType.Entity:
        this.formValidator.addError(
          'companyName',
          Validators.required.name,
          this.validationMsg.required
        );
        selectedControl = this.getUserEntityControl();
        otherControl = this.getUserAuthorityControl();
        break;
      case userType.GovernmentSector:
        this.formValidator.addError(
          'authority',
          Validators.required.name,
          this.validationMsg.required
        );
        selectedControl = this.getUserAuthorityControl();
        otherControl = this.getUserEntityControl();
        break;
    }
    selectedControl?.setValidators([Val.required]);
    selectedControl?.markAsTouched();
    selectedControl?.markAsDirty();
    otherControl?.reset();

    selectedControl?.updateValueAndValidity();
    otherControl?.updateValueAndValidity();
    this.formValidator.ShowErrors();
  }
  getUserEntityControl() {
    return this.registerationForm.get('companyName') as FormControl;
  }
  getUserAuthorityControl() {
    return this.registerationForm.get('authority') as FormControl;
  }
  onSubmit() {
    if (!this.registerationForm.valid) {
      this.formValidator.forceShowErrors();
      return;
    }
    this.router.navigate(['/auth/verify-phone'])
  }
  clearForm(){
    this.registerationForm.reset({userType:this.selectedUserType});
  }
}
enum userType {
  Entity = 'Entity Name',
  GovernmentSector = 'Government Sector',
}
