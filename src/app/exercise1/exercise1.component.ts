import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormControlOptions } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
  phoneNumber: any;
  formattedNumber: any;
  
  constructor() {
  }

  ngOnInit(): void {
  }

  form = new FormGroup({
    phoneNumber: new FormControl('', Validators.required)
  }, {updateOn: 'blur'});

  get phoneLen() {
    let phoneNumber = this.form.value.phoneNumber;
    let length = 0;

    if (phoneNumber?.length != undefined) {
      let newVal = phoneNumber.replace(/\D/g, '');
      length = newVal?.length;
    }
    
    return length;
  }
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    if (this.phoneNumber != undefined) {
      this.formattedNumber = this.phoneNumber.replace(/\D/g, '');
    }
  }
}
