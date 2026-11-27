import { Component, ElementRef, Input, ViewChild } from '@angular/core';

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

  @ViewChild('video') private video?: ElementRef<HTMLVideoElement>;

  get isVideo(): boolean {
    return this.animationSrc.endsWith('.mp4');
  }

  play(): void {
    const video = this.video?.nativeElement;
    if (!video) return;
    video.muted = true;
    video.currentTime = 0;
    video.play().catch(() => {});
  }

  pause(): void {
    this.video?.nativeElement.pause();
  }
}
