import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][canadaPhone]',
})
export class CanadaPhoneDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: any) {
    this.onInputChange(event, false);
  }

  @HostListener("input", ["$event.target.value"])
  onInput(event: any) {
    this.onInputChange(event, false);
  }

  onInputChange(event: any, backspace: boolean) {
    let newVal = event.replace(/\D/g, '');

    var x = newVal.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    newVal = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '')

    this.ngControl.valueAccessor?.writeValue(newVal);
  }
}
