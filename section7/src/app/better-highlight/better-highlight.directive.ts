import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // Not limited to running in the browser
  // works with service workers -> might not have access to DOM
  constructor(private elRef: ElementRef, private renderer: Renderer2) { } // better if u cannot access Dom
  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}