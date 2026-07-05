import { Component } from '@angular/core';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-make-ten-privacy-policy-page',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './make-ten-privacy-policy.component.html',
  styleUrl: './make-ten-privacy-policy.component.scss'
})
export class MakeTenPrivacyPolicyComponent {}
