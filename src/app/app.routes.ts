import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MakeTenPrivacyPolicyComponent } from './pages/make-ten-privacy-policy/make-ten-privacy-policy.component';
import { MakeTenSupportComponent } from './pages/make-ten-support/make-ten-support.component';
import { MakeTenComponent } from './pages/make-ten/make-ten.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'make-ten', component: MakeTenComponent },
	{ path: 'make-ten/privacy-policy', component: MakeTenPrivacyPolicyComponent },
	{ path: 'make-ten/support', component: MakeTenSupportComponent },
	{ path: '**', redirectTo: '' }
];
