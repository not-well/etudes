import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  constructor() {} // private renderer: Renderer2 // private elementRef: ElementRef,

  @HostListener('mouseenter')
  onMouseOver(): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'lime'
    // );
    this.backgroundColor = 'lime';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   ''
    // );
    this.backgroundColor = '';
  }

  // @HostBinding('style.backgroundColor')
  // backgroundColor: string = '';

  backgroundColor: string = '';

  @HostBinding('style.backgroundColor')
  get color(): string {
    return this.backgroundColor;
  }
}
