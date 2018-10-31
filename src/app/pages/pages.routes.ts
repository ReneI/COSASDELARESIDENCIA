import { RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {DocumentacionComponent} from './documentacion/documentacion.component';
import {AccoutSettingsComponent} from './accout-settings/accout-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {EncuestasComponent} from './encuestas/encuestas.component';
import {ReportesComponent} from './reportes/reportes.component';
import {PagesComponent} from './pages.component';
import {PerfilComponent} from './perfil/perfil.component';
import {ClientesComponent} from './clientes/clientes.component';
import {ClienteNuevoComponent} from './clientes/nuevo/clientenuevo.component';
import { GuardGuard } from '../services/guard/guard.guard';

const pagesroutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Panel administrativo'}, canActivate: [GuardGuard] },
      { path: 'progress', component: ProgressComponent, data :  { titulo: 'Panel administrativo'} },
      { path: 'graficas1', component: Graficas1Component, data :  { titulo: 'Panel administrativo'} },
      { path: 'manual',  component: DocumentacionComponent, data :  { titulo: 'Manual de Uso'} },
      {path: 'reportes', component: ReportesComponent, data :  { titulo: 'Reportes'}},
      { path: 'encuestas',  component: EncuestasComponent, data :  { titulo: 'Panel administrativo'} },
      { path: 'encuesta/:id', component: EncuestasComponent,
      children: [
      { path: '', redirectTo: 'encuestas', pathMatch: 'full' },
      { path: 'preguntas', component: EncuestasComponent },
      { path: 'estadisticas', component: EncuestasComponent }
      ]
    },
      { path: 'estilo', component: AccoutSettingsComponent, data :  { titulo: 'Configuracion'} },
      { path: 'perfil', component: PerfilComponent, data :  { titulo: 'Perfil'} },
      { path: 'clientes',  component: ClientesComponent, data :  { titulo: 'Clientes'}},
      { path: 'nuevo',     component: ClienteNuevoComponent, data :  { titulo: 'Clientes'}},
      { path: 'promesas', component: PromesasComponent, data :  { titulo: 'Panel administrativo'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }


    ]
  }
];


export const PAGES_ROUTE = RouterModule.forChild( pagesroutes);
