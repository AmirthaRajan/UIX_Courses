import { Directive , ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private renderer : Renderer2,private elementRef : ElementRef) { }

  @HostListener('mouseenter')
  onmouseenter()
  {
    this.renderer.addClass(this.elementRef.nativeElement,'highlight');
  }

  @HostListener('mouseleave')
  onmouseleave()
  {
    this.renderer.removeClass(this.elementRef.nativeElement,'highlight');
  }
}
