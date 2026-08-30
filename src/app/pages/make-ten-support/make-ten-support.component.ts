import { Component } from '@angular/core';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-make-ten-support-page',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './make-ten-support.component.html',
  styleUrl: './make-ten-support.component.scss'
})
export class MakeTenSupportComponent {}
