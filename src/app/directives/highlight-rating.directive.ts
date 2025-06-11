
import { Directive, ElementRef, Input, OnInit, Renderer2 } from
'@angular/core';
@Directive({
selector: '[appHighlightRating]'
})
export class HighlightRatingDirective implements OnInit {
@Input() appHighlightRating: number = 0;
constructor(
private el: ElementRef,
private renderer: Renderer2
) { }
ngOnInit() {
this.highlight();
}
private highlight() {
  if (this.appHighlightRating >= 4.5) {
    this.renderer.addClass(this.el.nativeElement, 'high-rating');
  } else if (this.appHighlightRating >= 4.0) {
    this.renderer.addClass(this.el.nativeElement, 'good-rating');
  }
}

}