import { Component } from '@angular/core';

import { FooterComponent } from '../../components/footer/footer.component';
import { ImageGalleryComponent, GalleryItem } from '../../components/image-gallery/image-gallery.component';

@Component({
  selector: 'app-home-page',
  imports: [ImageGalleryComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly images: GalleryItem[] = [
    {
      id: 1,
      title: 'Pancake Engine',
      href: 'https://github.com/RohanFredriksson/PancakeEngine',
      frameSrc: '/pancake-static.png',
      animationSrc: '/pancake.gif',
      alt: 'Pancake Engine'
    },
    {
      id: 2,
      title: 'Fractal Explore',
      href: 'https://github.com/RohanFredriksson/FractalExplore',
      frameSrc: '/fractal-explore-static.png',
      animationSrc: '/fractal-explore.gif',
      alt: 'Fractal Explore'
    },
    {
      id: 3,
      title: 'GIF to Contribution',
      href: 'https://github.com/RohanFredriksson/GIF-to-Contribution',
      frameSrc: '/gif-to-contribution-static.png',
      animationSrc: '/gif-to-contribution.gif',
      alt: 'GIF to Contribution',
      darkBackground: true
    },
    {
      id: 4,
      title: 'Make Ten Calculator',
      href: '#/make-ten',
      frameSrc: '/make-ten-static.png',
      animationSrc: '/make-ten-static.png',
      alt: 'Make Ten Calculator'
    }
  ];

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
