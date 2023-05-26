import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTruncateTitle]',
})
export class TruncateTitleDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const element: HTMLElement = this.elementRef.nativeElement;
    const title: string = element.innerText;
    const truncatedTitle: string = this.truncateText(title, 15);
    element.innerText = truncatedTitle;
    element.setAttribute('title', title);
  }

  private truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }
}
