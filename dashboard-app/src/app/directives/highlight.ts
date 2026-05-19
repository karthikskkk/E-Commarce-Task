import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
   standalone: true
})
export class HighlighPipe {
  constructor(private el:ElementRef) {}

  ngOnInit(){
    console.log(this.el.nativeElement);
    this.el.nativeElement.style.color="red"
  }


}
