import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements OnInit {
  constructor() {}

  @HostListener('mouseenter')
  onMouseOver(): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor')
  backgroundColor: string = '';

  @Input('highlight')
  defaultColor: string = '';

  @Input()
  highlightColor: string = 'cyan';

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
