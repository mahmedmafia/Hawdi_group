import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FormValidatorService {
  formGroup!: FormGroup;
  formErrors: any = {};
  validationMessages: any = {};

  constructor() {
  }

  public setFormGroup(fg: FormGroup): void {
    this.formGroup = fg;
    this.formGroup.valueChanges.subscribe(_ => {
      this.onValueChanged();
    });
  }

  public createForm(formGeneratorArray: Array<FormField>): FormGroup {
    const fgObject: any = {};
    for (const formField of formGeneratorArray) {
      let field;
      if (formField.array) {
        field = this.initializeFieldArray(formField);
      } else {
        field = this.initializeField(formField);
      }
      fgObject[formField.fieldName] = field;
    }
    const formGroup = new FormGroup(fgObject);
    this.setFormGroup(formGroup);
    return formGroup;
  }

  private initializeFieldArray(formField: any) {
    const formArray = new Array<any>();
    for (const fieldObject of formField.defaultValue) {
      const field = this.initializeField(fieldObject, formField.fieldName);
      formArray[fieldObject.fieldName] = field;
    }
    // @ts-ignore
    return new FormGroup(formArray);
  }

  private initializeField(formField: any, parentArray: any = null) {
    const fgfieldValidatorArray = [];
    if (!formField.validators) {
      formField.validators = [];
    }
    // try {
    for (const validator of formField.validators) {
      if (validator.validatorFn().n) {
        fgfieldValidatorArray.push(validator.validatorFn().ret(validator.validatorFn().n));
      } else {
        fgfieldValidatorArray.push(validator.validatorFn().ret);
      }
      if (parentArray) {
        this.addError(`${parentArray}.${formField.fieldName}`, validator.validatorFn().name, validator.message, validator.messageAr);
        continue;
      }
      this.addError(formField.fieldName, validator.validatorFn().name, validator.message, validator.messageAr);
    }

    const field = new FC(formField.defaultValue, {
      validators: fgfieldValidatorArray,
    });
    field.onTouchedChanged().subscribe(_ => {
      this.onValueChanged();
    });

    return field;
  }

  public addError(fieldName: string, errorName: string, message: string, messageAr?: string) {
    if (!this.formErrors.hasOwnProperty(fieldName)) {
      this.formErrors[fieldName] = '';
    }

    if (!this.validationMessages.hasOwnProperty(fieldName)) {
      this.validationMessages[fieldName] = {};
    }
      this.validationMessages[fieldName][errorName] = message;
  }
  public addValidation(controlName:string,name:any,value:string | number){
    // @ts-ignore
    this.formGroup.controls[controlName].addValidators(Validators[name](value));
  }

  public getFormGroup(): FormGroup {
    return this.formGroup;
  }

  public getValidationMessages() {
    return this.validationMessages;
  }

  public getFormError() {
    return this.formErrors;
  }

  public ShowErrors() {
    if (!this.formGroup) { return; }
    const form = this.formGroup;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && (control.touched || control.dirty) && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] = messages[key];
            }
          }
        }
      }
    }
  }

  private onValueChanged() {
    this.ShowErrors();
  }

  forceShowErrors() {
    for (const i in this.formGroup.controls) {
      if (i) {
        this.formGroup.controls[i].markAsTouched();
      }
    }
    this.ShowErrors();
  }

  isEmpty() {
    const values = Object.values(this.formGroup.value);
    return values.filter(v => !!v).length === 0;
  }

  public markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();

      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

}

class FC  extends FormControl {
  private _x: BehaviorSubject<any> = new BehaviorSubject(false);

  markAsTouched() {
    super.markAsTouched();
    this._x.next(true);
  }

  markAsUntouched() {
    super.markAsUntouched();
    this._x.next(false);
  }


  onTouchedChanged() {
    return this._x;
  }
}
export interface FormField {
  fieldName: string;
  defaultValue: any | string | FormField;
  validators?: Array<ValidatorModel>;
  array?: boolean;
  fieldType?:string;
  displayName:string;
  fieldValues?:{value:any,name?:string}[]
}
export interface ValidatorModel {
  validatorFn: any | Function;
  message: string;
}
