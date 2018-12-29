import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') isOpenClassAdded = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){}
  
  @HostListener('click') toggleOpen(){
    this.isOpenClassAdded = !this.isOpenClassAdded
  }

}
