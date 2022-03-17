import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  elementRef: ElementRef;
  constructor(elementfRef: ElementRef) { 
    this.elementRef = elementfRef;
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }



}
