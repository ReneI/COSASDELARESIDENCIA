import { RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {DocumentacionComponent} from './documentacion/documentacion.component';

const pagesroutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: 'manual',  component: DocumentacionComponent },
      {path: 'usuarios', component: DocumentacionComponent},
      { path: 'encuestas',  component: DocumentacionComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

    ]
  }
];


export const PAGES_ROUTE = RouterModule.forChild( pagesroutes);
