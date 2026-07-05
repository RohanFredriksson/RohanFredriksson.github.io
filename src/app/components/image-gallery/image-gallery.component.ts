import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { HoverGifComponent } from '../hover-gif/hover-gif.component';

export interface GalleryItem {
  id: number;
  title: string;
  href: string;
  frameSrc: string;
  animationSrc: string;
  alt: string;
  darkBackground?: boolean;
}

@Component({
  selector: 'app-image-gallery',
  imports: [CommonModule, HoverGifComponent],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss'
})
export class ImageGalleryComponent {
  @Input({ required: true }) images: GalleryItem[] = [];
}
