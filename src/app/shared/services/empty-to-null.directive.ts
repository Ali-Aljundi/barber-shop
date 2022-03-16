import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appEmptyToNull]'
})
export class EmptyToNullDirective {

  constructor( private control: NgControl) { }

  @HostListener('input', ['$event.target'])
  onEvent(target: HTMLInputElement){    
    this.control.control.setValue((target.value === "") ? null : target.value);
  }

}
