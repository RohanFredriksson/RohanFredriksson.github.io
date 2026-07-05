import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface NavSection {
  label: string;
  id: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() sections: NavSection[] = [];

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
