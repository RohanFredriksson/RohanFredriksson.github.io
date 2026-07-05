import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-gif',
  imports: [],
  templateUrl: './hover-gif.component.html',
  styleUrl: './hover-gif.component.scss'
})
export class HoverGifComponent {
  @Input({ required: true }) animationSrc!: string;
  @Input({ required: true }) frameSrc!: string;
  @Input({ required: true }) alt!: string;
}
