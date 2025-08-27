import { Routes } from '@angular/router';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { Pl4IntegrationComponent } from './pages/pl4integration/pl4integration.component';

export const APP_ROUTES: Routes = [
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pl4integration', component: Pl4IntegrationComponent },

  // Fallback routes
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Empty path redirects to home
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Fallback route redirects to home (unknown routes)
];
