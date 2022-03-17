import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSecondHighlight]'
})
export class SecondHighlightDirective implements OnInit {

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

  renderer: Renderer2;
  elRef: ElementRef;

  constructor(elRef: ElementRef, renderer: Renderer2) {
    this.elRef = elRef;
    this.renderer = renderer;
   }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

}
