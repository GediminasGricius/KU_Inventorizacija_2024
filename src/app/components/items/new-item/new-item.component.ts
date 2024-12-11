import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.css'
})
export class NewItemComponent {
  public itemForm:FormGroup;

  constructor (){
    this.itemForm=new FormGroup({
      'inv_number':new FormControl(null,[Validators.required, this.validateInvNumber]),
      'name':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(32)]),
      'locations':new FormArray([
        new FormControl(null, [Validators.required])
      ])
    });
  }

  get loactions(){
    return (this.itemForm.get('locations') as FormArray).controls;
  }

  public addLocationField(){
    (this.itemForm.get('locations') as FormArray).push(
      new FormControl(null, Validators.required)
    );
  }

  public removeLocationField(){
    (this.itemForm.get('locations') as FormArray).removeAt(-1);
  }

  public onSubmit(){
    console.log(this.itemForm.value);
  }

  private validateInvNumber(control:FormControl):ValidationErrors | null{
    if (  /^[A-Z]{2}[0-9]{5}$/.test(control.value)    ){
      return null;
    }

    return {error:"Neteisingas inventorizacijos numeris"};
  }

}
