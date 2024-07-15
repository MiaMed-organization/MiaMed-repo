import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipTitle: string;
  tooltip: HTMLElement;
  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) { this.show(); }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) { this.hide(); }
  }

  show() {
    this.tooltip = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle)
    );
    this.renderer.appendChild(document.body, this.tooltip);
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip.getBoundingClientRect();

    const top = hostPos.top + window.scrollY - tooltipPos.height / 2 + hostPos.height / 2;
    const left = hostPos.left + window.scrollX + hostPos.width + this.offset;

    this.renderer.setStyle(this.tooltip, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
    this.renderer.setStyle(this.tooltip, 'position', 'absolute');
    this.renderer.setStyle(this.tooltip, 'background-color', '#0A94C2');
    this.renderer.setStyle(this.tooltip, 'color', '#fff');
    this.renderer.setStyle(this.tooltip, 'padding', '5px 10px');
    this.renderer.setStyle(this.tooltip, 'border-radius', '4px');
    this.renderer.setStyle(this.tooltip, 'z-index', '1000');
    this.renderer.setStyle(this.tooltip, 'white-space', 'nowrap');
    this.renderer.setStyle(this.tooltip, 'box-shadow', '0px 0px 10px rgba(0, 0, 0, 0.1)');
    
    const arrow = this.renderer.createElement('span');
    this.renderer.appendChild(this.tooltip, arrow);
    this.renderer.setStyle(arrow, 'content', '""');
    this.renderer.setStyle(arrow, 'position', 'absolute');
    this.renderer.setStyle(arrow, 'width', '10px');
    this.renderer.setStyle(arrow, 'height', '10px');
    this.renderer.setStyle(arrow, 'background-color', '#0A94C2');
    this.renderer.setStyle(arrow, 'transform', 'translateY(-50%) rotate(45deg)');
    this.renderer.setStyle(arrow, 'left', '-5px');
    this.renderer.setStyle(arrow, 'top', '50%');
  }

  hide() {
    this.renderer.removeChild(document.body, this.tooltip);
    this.tooltip = null;
  }
}
