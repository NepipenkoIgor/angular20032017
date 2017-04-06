import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public orderForm: FormGroup;
  public emailsModel: FormGroup;

  public constructor(private _fb: FormBuilder) { }

  public ngOnInit(): void {

    this.emailsModel = this._fb.group({
      emails: this._fb.array([''])
    });

    this.orderForm = this._fb.group({
      orderName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]],
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]],
      lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]],
      pass: this._fb.group({
        pass: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]],
        cpass: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]],
      }, {
        validator: this.equalValidator
      })
    });
  }

  public sendOrder(value: { [key: string]: string }): void {
    console.log(value);
  }

  public  equalValidator({ value }: FormGroup): { [key: string]: boolean } {
    const [firstKey, ...restKeys] = Object.keys(value || {});
    const valid: boolean = restKeys.every((key: string) => value[key]
    && value[firstKey] && value[key] === value[firstKey]);
    return valid ? null : { isNotEqual: true };
  }


  public addEmail(): void {
    (this.emailsModel.get('emails') as FormArray).push(new FormControl(''));
  }
}
