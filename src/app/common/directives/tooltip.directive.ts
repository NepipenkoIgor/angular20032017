import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {

  @HostBinding('class.tooltip-container')
  public tooltipContainer: boolean = true;
  private _tooltipElement: HTMLDivElement = document.createElement('div');

  @Input()
  public set appTooltip(value: string) {
    this._tooltipElement.textContent = value;
  }

  public constructor(private _elementRef: ElementRef) { }

  public ngOnInit(): void {
    this._tooltipElement.className = 'tooltip';
    this._elementRef.nativeElement.appendChild(this._tooltipElement);
  }

  public hide(): void {
    this._tooltipElement.classList.remove('tooltip-active');
  }

  public show(): void {
    this._tooltipElement.classList.add('tooltip-active');
  }

}
