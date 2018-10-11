import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[opacity]'
})
export class OpacityDirective {
  constructor(private el: ElementRef) { }
  @Input() defaultOpacity: number;
  @Input('opacity') opacity: number;
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(1);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(0.5);
  }
  private highlight(opacity: number) {
    this.el.nativeElement.style.opacity = opacity;
  }
}
