import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

export function CompareValidator(controlNameToCompar: string): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (c.value === null || c.value.length === 0) {
      return null; // don't validate empty value
    }
    const controlToCompar = c.root.get(controlNameToCompar);
    if (controlToCompar) {
      const subscription: Subscription = controlToCompar.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controlToCompar && controlToCompar.value !== c.value ? { 'compare': true } : null;
  };
}

@Directive({
  selector: '[compare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true }]
})
export class CompareValidatorDirective implements Validator {
  @Input('compare') controlNameToCompar: string;

  validate(c: AbstractControl): ValidationErrors | null {
    return CompareValidator(this.controlNameToCompar)(c);
  }
}
