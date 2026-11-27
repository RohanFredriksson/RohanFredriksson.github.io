import { Component } from '@angular/core';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent, NavSection } from '../../components/header/header.component';
import { HoverGifComponent } from '../../components/hover-gif/hover-gif.component';

interface Project {
  title: string;
  eyebrow: string;
  description: string;
  imageSrc: string;
  animationSrc?: string;
  imageAlt: string;
  tags: string[];
  links: ProjectLink[];
}

interface ProjectLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-home-page',
  imports: [HoverGifComponent, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly projects: Project[] = [
    {
      title: 'Make Ten',
      eyebrow: 'A little puzzle for the commute',
      description:
        'Make ten from the four digits on a Sydney train carriage. Scan the number with your camera or type it in, solve it yourself in play mode, or reveal an answer when you are stuck.',
      imageSrc: '/make-ten-static.jpg',
      animationSrc: '/make-ten.webp',
      imageAlt: 'The Make Ten app solving a carriage number in play mode',
      tags: ['Ionic', 'Angular', 'Capacitor'],
      links: [
        { label: 'App Store', href: 'https://apps.apple.com/us/app/make-ten/id6784924394' },
        { label: 'Web app', href: '/make-ten' }
      ]
    },
    {
      title: 'Bigtwodle',
      eyebrow: 'A daily Big Two puzzle',
      description:
        'Everyone gets the same seeded deal and plays against three deterministic bots. Shed as many cards as you can, then compare your score.',
      imageSrc: '/bigtwodle-static.jpg',
      animationSrc: '/bigtwodle.mp4',
      imageAlt: 'A hand of Big Two being played against three bots in Bigtwodle',
      tags: ['Angular', 'TypeScript', 'AWS'],
      links: [{ label: 'Play', href: 'https://bigtwodle.com' }]
    },
    {
      title: 'Agglomerative Clustering',
      eyebrow: 'Exact Ward colour quantization',
      description:
        'A JavaScript library on npm that builds an image\'s colour hierarchy once, then cuts nested palettes of any size from it. Try it on your own images in the interactive demo.',
      imageSrc: '/agglomerative-clustering-static.webp',
      animationSrc: '/agglomerative-clustering.webp',
      imageAlt: 'A photo of two parrots above its colour-quantized version, with the palette below',
      tags: ['WebAssembly', 'C++', 'JavaScript'],
      links: [
        { label: 'Demo', href: 'https://rohanfredriksson.github.io/agglomerative-clustering/' },
        { label: 'Source', href: 'https://github.com/RohanFredriksson/agglomerative-clustering' }
      ]
    },
    {
      title: 'Pancake Engine',
      eyebrow: 'A foundation for 2D games',
      description:
        'A lightweight C++ game engine with graphics, audio, input, and an entity-component system. Built to make creating and extending 2D games approachable.',
      imageSrc: '/pancake-static.png',
      animationSrc: '/pancake.gif',
      imageAlt: 'A 2D game running in Pancake Engine',
      tags: ['C++', 'OpenGL', 'Game development'],
      links: [{ label: 'Source', href: 'https://github.com/RohanFredriksson/PancakeEngine' }]
    },
    {
      title: 'Fractal Explore',
      eyebrow: 'Real-time mathematical landscapes',
      description:
        'Explore fractals by zooming and panning through their intricate detail. GPU shaders turn what once took minutes to render into a real-time experience.',
      imageSrc: '/fractal-explore-static.png',
      animationSrc: '/fractal-explore.gif',
      imageAlt: 'Zooming into a colourful fractal in Fractal Explore',
      tags: ['C++', 'OpenGL', 'GLSL'],
      links: [{ label: 'Source', href: 'https://github.com/RohanFredriksson/FractalExplore' }]
    },
    {
      title: 'GIF to Contribution',
      eyebrow: 'A creative twist on the contribution graph',
      description:
        'Turn videos and GIFs into animations inspired by GitHub contribution graphs. A playful image-processing tool with themes for light and dark profiles.',
      imageSrc: '/gif-to-contribution-static.png',
      animationSrc: '/gif-to-contribution.gif',
      imageAlt: 'An animation made from GitHub-style contribution squares',
      tags: ['Python', 'OpenCV', 'Pillow'],
      links: [{ label: 'Source', href: 'https://github.com/RohanFredriksson/GIF-to-Contribution' }]
    }
  ];

  readonly sections: NavSection[] = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
