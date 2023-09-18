import { Validators as Val } from '@angular/forms';

export abstract class Validators {

  static required() {
    return { ret: Val.required, name: 'required' };
  }

  static min(n: any) {
    return function () {
      return { ret: Val.min, name: 'min', n };
    };
  }

  static max(n: any) {
    return function () {
      return { ret: Val.max, name: 'max', n };
    };
  }

  static minLength(n: any) {
    return function () { return { ret: Val.minLength, name: 'minlength', n }; };
  }

  static requiredTrue() {
    return { ret: Val.requiredTrue, name: 'requiredtrue' };
  }

  static email() {
    return { ret: Val.email, name: 'email' };
  }

  static maxLength(n: any) {
    return function () {
      return { ret: Val.maxLength, name: 'maxlength', n };
    };
  }

  static pattern(n: any) {
    return function () {
      return { ret: Val.pattern, name: 'pattern', n };
    };
  }
}

