import { FormControl, FormGroup } from '@angular/forms';
import { FormField } from '../services/form-validator.service';

export abstract class BaseForm {
  private formGroup!: FormGroup;
  private contollerFieldObject!:{[key:string]:FormField};
  public patterns={
    textOnlyPattern : /(^[a-z ]+$)/i,
    numbersOnlyPattern:/^-?(0|[1-9]\d*)?$/,
    phonePattern:/^01[0125][0-9]{8}$/,
  }
  public validationMsg = {
    required: "This field is required field",
    invalidEmail: "Enter valid email",
    empty: "This field cannot be empty",
    minLength: "This field cannot be less than ",
    maxLength: "This field cannot be more than ",
    pattern: "This field format is not correct",
    min: "This field cannot be less than ",
    max: "This field cannot be more than ",
    invalidDate: "Invalid Expiration Date",
    dateInTheFuture: "Invalid Date (Must be in the future)",
    notInPattern: "This field cannot be numbers only",
    requiredNumber: "This field must be number",
    requiredFloat: "This field must be a decimal number between 0 and 1",
    textOnly: "This field must contain letters only",
    lessThanOtherField: "This field must be a number less than or equal ",
    moreThanOtherField: "This field must be a number more than ",
    phonePattern:"This field must be egyptian phone number",
    confirmValue:"this field does not match ",
    complexPassword:'Password should contain at least one capital letter, a number, a special character',
  }

  constructor() { }

  set fromControllers(formGroup: FormGroup) {
    this.formGroup = formGroup
  }
  set fieldObject(controllerObject:{[key:string]:FormField}){
    this.contollerFieldObject=controllerObject;
  }
  get from(): FormGroup {
    return this.formGroup;
  }

  get fromValue() {
    if (this.formGroup.valid) {
      return this.formGroup.value;
    } else {
      this.setAllControllersTouched();
    }
  }

  setAllControllersTouched() {
    Object.keys(this.formGroup.controls).forEach(key => {
      this.formGroup.controls[key].markAsTouched();
    });
  }

  set formValue(values: any) {
    this.formGroup.patchValue(values);
  }

  isControllerInValid(controller: any): boolean {
    return this.formGroup.controls[controller].touched && this.formGroup.controls[controller].invalid;
  }

  getControllerErrors(controller: any) {
    return this.formGroup.controls[controller].errors;
  }
  convertFormControl(controller:string){
    return this.formGroup.get(controller) as FormControl;
  }
  convertFieldObject(fieldObjectkey:string){
    return this.contollerFieldObject[fieldObjectkey];
  }
  clearForm(){
    this.from.reset();
  }
}
export interface formControllers {
  [key: string]: FormField;
}
