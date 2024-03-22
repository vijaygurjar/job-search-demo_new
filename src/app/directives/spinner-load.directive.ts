import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSpinnerLoad]',
  standalone: true,
})
export class SpinnerLoadDirective {
  @Input('appSpinnerLoad') appSpinnerLoad: boolean | string = true;
  spinnerElement: HTMLElement = this.render.createElement('div');
  constructor(private el: ElementRef, private render: Renderer2) {}
  ngAfterViewInit() {
    this.spinnerElement.classList.add('spinner-border');
    this.render.setStyle(this.el.nativeElement, 'display', 'none');
    this.render.insertBefore(this.el.nativeElement.parentNode, this.spinnerElement, this.el.nativeElement.nextSibling);

  }
  @HostListener('load') onLoad() {
    setTimeout(()=> {
      this.spinnerElement.remove();
      this.render.setStyle(this.el.nativeElement, 'display', '');
      this.render.removeClass(this.el.nativeElement.parentNode, 'spinner-border');
    }, 100)
  }
  @HostListener('error') onError() {
      setTimeout(()=> {
        this.spinnerElement.remove();
        this.render.setStyle(this.el.nativeElement, 'display', '');
      }, 100)
  }
}
