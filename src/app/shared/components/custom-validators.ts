import { AbstractControl, ValidatorFn } from '@angular/forms';
// import { Moment } from 'moment';
// import moment from 'moment';
const moment:any={};
interface Moment{
  [kay:string]:any
}
export class CustomValidators {

  static differentPassword(n: any) {
    return function () {
      return {
        ret: (oldPasswordFieldName: string): ValidatorFn => {
          return (control: AbstractControl): { [key: string]: any } | null => {
            const newValue = control.value;
            let oldValue;
            if (control.parent) {
              oldValue = control.parent.value[oldPasswordFieldName];
            } else {
              oldValue = null;
            }
            const returnValue = (newValue != null && newValue !== '')
              && (oldValue != null && oldValue !== '')
              && newValue === oldValue
              ? { 'differentPassword': { value: control.value } }
              : null;
            return returnValue;
          };
        },
        name: 'differentPassword',
        n
      };
    };
  }

  static oldPasswordNotEmpty(n: any) {
    return function () {
      return {
        ret: (oldPasswordFieldName: string): ValidatorFn => {
          return (control: AbstractControl): { [key: string]: any } | null => {
            const newValue = control.value;
            let oldValue;
            if (control.parent) {
              oldValue = control.parent.value[oldPasswordFieldName];
            } else {
              oldValue = null;
            }
            const returnValue = (newValue != null && newValue !== '') && (oldValue == null || oldValue === '')
              ? { 'oldPasswordNotEmpty': { value: control.value } }
              : null;
            return returnValue;
          };
        },
        name: 'oldPasswordNotEmpty',
        n
      };
    };
  }

  static customPattern(n: any) {
    return function () {
      return {
        ret: (pattern: RegExp): ValidatorFn => {
          return (control: AbstractControl): { [key: string]: any } | null => {
            let value = control.value;

            if (value == null) {
              value = '';
            }
            if (value === '') {
              return null;
            }
            const returnValue = pattern.test(value);
            pattern.test(value);

            return !returnValue ? { 'customPattern': { value: value } } : null;
          };
        },
        name: 'customPattern',
        n
      };
    };
  }
  static complexPassword(n: any) {
    return function () {
      return {
        ret: (): ValidatorFn => {
          return (control: AbstractControl): { [key: string]: any } | null => {
            let value = control.value;
            let errors:string[]=[];
            const isWhitespace = /^(?=.*\s)/;
            if (isWhitespace.test(value)) {
              errors.push("Password must not contain Whitespaces.");
            }
            const isContainsUppercase = /^(?=.*[A-Z])/;
            if (!isContainsUppercase.test(value)) {
              errors.push("Password must have at least one Uppercase Character.");
            }
            const isContainsLowercase = /^(?=.*[a-z])/;
        if (!isContainsLowercase.test(value)) {
          errors.push("Password must have at least one Lowercase Character.");
        }


        const isContainsNumber = /^(?=.*[0-9])/;
        if (!isContainsNumber.test(value)) {
          errors.push("Password must contain at least one Digit.");
        }


        const isContainsSymbol =
          /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
        if (!isContainsSymbol.test(value)) {
          errors.push("Password must contain at least one Special Symbol.");
        }



            if (value == null) {
              value = '';
            }
            if (value === '') {
              return null;
            }
            const returnValue = errors.length==0;

            return !returnValue ? { 'complexPassword': { value: value,errors} } : null;
          };
        },
        name: 'complexPassword',
        n
      };
    };
  }


  static notInPattern(n: any) {
    return function () {
      return {
        ret: (pattern: RegExp): ValidatorFn => {
          return (control: AbstractControl): { [key: string]: any } | null => {
            let value = control.value;
            if (value == null) {
              value = '';
            }
            if (value === '') {
              return null;
            }
            const returnValue = pattern.test(value);
            pattern.test(value);
            return returnValue ? { 'notInPattern': { value: value } } : null;
          };
        },
        name: 'notInPattern',
        n
      };
    };
  }

  static confirmPasswordWith(n: any) {
    return function () {
      return {
        ret: (passwordFieldName: string): ValidatorFn => {
          return (control: AbstractControl): { [key: string]: any } | null => {
            const currentValue = control.value;
            let otherValue;
            if (control.parent) {
              otherValue = control.parent.value[passwordFieldName];
            } else {
              otherValue = null;
            }
            return currentValue !== otherValue ? { 'confirmPasswordWith': { value: currentValue } } : null;
          };
        },
        name: 'confirmPasswordWith',
        n
      };
    };
  }

  static dateInTheFuture() {
    return {
      ret: (control: AbstractControl): { [key: string]: any } | null => {
        const currentValue = control.value;
        if (currentValue === '' || currentValue == null) {
          return null;
        }
        const dateFromValue = new Date(currentValue);
        const dateNow = new Date();
        dateNow.setHours(0);
        dateNow.setMinutes(0);
        dateNow.setSeconds(0);
        dateNow.setMilliseconds(0);
        let valid: Boolean;
        if (dateFromValue < dateNow) {
          valid = false;
        } else {
          valid = true;
        }
        return !valid ? { 'dateInTheFuture': { value: currentValue } } : null;
      },
      name: 'dateInTheFuture'
    };
  }
  static dateNotInTheFuture() {
    return {
      ret: (control: AbstractControl): { [key: string]: any } | null => {
        const currentValue = control.value;
        if (currentValue && currentValue.startDate) {
          const startdateMoment: Moment = currentValue.startDate;
          const startDate: Date = startdateMoment.toDate();
          const dateNow = new Date();
          let valid: Boolean;
          if (startDate > dateNow) {
            valid = false;
          } else {
            valid = true;
          }
          return !valid ? { 'dateNotInTheFuture': { value: currentValue } } : null;
        } else {
          return null;
        }
      },
      name: 'dateNotInTheFuture'
    };
  }


  static requiredNumber() {
    return {
      ret: (control: AbstractControl): { [key: string]: any } | null => {
        const currentValue = control.value;
        let result;
        if (currentValue == null || currentValue === '') {
          result = false;
        } else {
          if (isNaN(currentValue)) {
            result = false;
          } else {
            result = true;
          }
        }
        return !result ? { 'requiredNumber': { value: currentValue } } : null;
      },
      name: 'requiredNumber'
    };
  }

  static negativeNumber() {
    return {
      ret: (control: AbstractControl): { [key: string]: any } | null => {
        const currentValue = control.value;
        let result;
        if (currentValue < 0) {
          result = false;
        } else {
          if (isNaN(currentValue)) {
            result = false;
          } else {
            result = true;
          }
        }
        return !result ? { 'NotInPattern': { value: currentValue } } : null;
      },
      name: 'NotInPattern'
    };
  }
  static lessThanOtherField(n: any) {
    return function () {
      return {
        ret: (OtherfieldName: string): ValidatorFn => {
          return (control: AbstractControl): { [key: string]: any } | null => {
            let value = control.value;
            let result;
            if (value == null || value === '') {
              return null;
            }
            if (isNaN(value) || +value < 1) {
              result = false;
            } else if (+value > + control.parent?.value[OtherfieldName]) {
              result = false;
            } else {
              result = true
            }

            return !result ? { 'customPattern': { value: value } } : null;
          };
        },
        name: 'customPattern',
        n
      };
    };
  }


  static MoreThanOtherField(n: any) {
    return function () {
      return {
        ret: (OtherfieldName: string): ValidatorFn => {
          return (control: AbstractControl): { [key: string]: any } | null => {
            let value = control.value;
            let result;
            if (value == null || value === '') {
              result = false;
            }
            if (isNaN(value) || +value < 1) {
              result = false;
            } else if (+value <= +control.parent?.value[OtherfieldName]) {
              result = false;

            } else {
              result = true
            }
            return !result ? { 'customPattern': { value: value } } : null;
          };
        },
        name: 'customPattern',
        n
      };
    };
  }

  static timeMoreThenStart(control: AbstractControl): { [key: string]: any } | null  {
    let value: string = control.value;
    let result: boolean;
    if (value == null || value === '') {
      result = false;
    } else if (
      moment(value, 'HH:mm') <=
      moment(control.parent?.value['startAt'], 'HH:mm')
    ) {
      result = false;
    } else {
      result = true;
    }
    return !result ? { customPattern: { value: value } } : null;
  }
  static dateMinimum(n: any) {
    return function () {
      return {
        ret: (inputDate: Date): ValidatorFn => {
          return (control: AbstractControl): { [key: string]: any } | null => {
            let valid;
            if (control.value == null) {
              return null;
            }

            const controlDate = moment(control.value);

            if (!controlDate.isValid()) {
              return null;
            }
            const validationDate = moment(inputDate).toDate();
            if (controlDate.diff(validationDate)> 0) {
              valid = false;
            } else {
              valid = true;
            }
            return !valid ? { 'dateMin': { value: controlDate } } : null;
          };
        },
        name: 'dateMin',
        n
      };
    };
  }
}
