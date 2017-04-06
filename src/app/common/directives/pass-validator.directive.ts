import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appPassValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: equalValidator,
      multi: true
    }
  ]
})
export class PassValidatorDirective {

}

function equalValidator({ value }: FormGroup): { [key: string]: boolean } {
  const [firstKey, ...restKeys] = Object.keys(value || {});
  const valid: boolean = restKeys.every((key: string) => value[key]
  && value[firstKey] && value[key] === value[firstKey]);
  return valid ? null : { isNotEqual: true };
}