import { Directive, ElementRef, OnInit, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBasicHighlightDirective]'
})
export class BasicHighlightDirectiveDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding('style.backgroundColor') bg = 'red';
  @HostBinding('class.valid') isValid;
  ngOnInit(): void {
    this.elRef.nativeElement.style.backgroundColor = 'red';
  }



  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.bg = 'green';
    this.isValid = true;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey');
    this.bg = 'grey';
    this.isValid = false;
  }
}
