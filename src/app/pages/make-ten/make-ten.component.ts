import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { compute } from '../../modules/compute';

@Component({
  selector: 'app-make-ten-page',
  imports: [FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './make-ten.component.html',
  styleUrl: './make-ten.component.scss'
})
export class MakeTenComponent {
  code = '';
  answer: string | null | '' = '';

  onCodeChange(value: string): void {
    const filtered = value.replace(/[^0-9]/g, '').slice(0, 4);
    this.code = filtered;

    if (!/^[0-9]{4}$/.test(filtered)) {
      this.answer = '';
      return;
    }

    this.answer = compute(filtered);
  }
}
