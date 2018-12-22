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
import { PanelreportesComponent } from './reportes/panelreportes/panelreportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariodetalleComponent } from './usuarios/usuariodetalle.component';
import { ListadorespuestasComponent } from './encuestas/listadorespuestas.component';


const pagesroutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Panel administrativo'}, canActivate: [GuardGuard] },
      { path: 'progress', component: ProgressComponent, data :  { titulo: 'Panel administrativo'} },
      { path: 'graficas1', component: Graficas1Component, data :  { titulo: 'Panel administrativo'} },
      { path: 'manual',  component: DocumentacionComponent, data :  { titulo: 'Manual de Uso'} },
      {path: 'reportes', component: PanelreportesComponent, data :  { titulo: 'Reportes'}},
      { path: 'encuestas',  component: EncuestasComponent, data :  { titulo: 'Panel administrativo'} },
      { path: 'encuesta/:id', component: EncuestasComponent,
      children: [
      { path: '', redirectTo: 'encuestas', pathMatch: 'full' },
      { path: 'preguntas', component: EncuestasComponent },
      { path: 'estadisticas', component: EncuestasComponent }
      ]
    },
    { path: 'reportespanel', component: PanelreportesComponent , data :  { titulo: 'Perfil'} },
    { path: 'reporte', component: ReportesComponent , data :  { titulo: 'Perfil'} },
    { path: 'reporte/:id', component: ReportesComponent , data :  { titulo: 'Perfil'} },

      { path: 'estilo', component: AccoutSettingsComponent, data :  { titulo: 'Configuracion'} },
      { path: 'perfil', component: PerfilComponent, data :  { titulo: 'Perfil'} },
      { path: 'clientes',  component: ClientesComponent, data :  { titulo: 'Clientes'}},
      { path: 'clientes/:id',  component: ClientesComponent, data :  { titulo: 'Clientes'}},

      { path: 'nuevo',     component: ClienteNuevoComponent, data :  { titulo: 'Clientes'}},
      { path: 'usuarios', component: UsuariosComponent, data :  { titulo: 'usuarios'} },
      { path: 'usuarios/:id', component: UsuariodetalleComponent, data :  { titulo: 'usuarios'} },
      { path: 'encuestas/repuestas', component: ListadorespuestasComponent , data :  { titulo: 'Respuesta de los encuestados'} },


      { path: 'promesas', component: PromesasComponent, data :  { titulo: 'Panel administrativo'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }


    ]
  }
];


export const PAGES_ROUTE = RouterModule.forChild( pagesroutes);
