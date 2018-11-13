import { EncuestaPublicaComponent } from './encuesta/encuestapublica/encuesta.component';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './services/guard/guard.guard';


import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';




const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
     { path: 'calidad', component: EncuestaPublicaComponent }
  //  { path: '**', component: NopagefoundComponent }
  //  { path: '', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
