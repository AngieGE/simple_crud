import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustionarioListComponent } from './components/custionario-list/custionario-list.component';
import { CuestionarioListAllComponent } from './components/cuestionario-list-all/cuestionario-list-all.component';
import { CustionarioFormComponent } from './components/custionario-form/custionario-form.component'
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { CuestionarioFillComponent } from './components/cuestionario-fill/cuestionario-fill.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: LoginFormComponent
  },
  {
    path: 'registro',
    component: RegisterFormComponent
  },
  {
    path: 'cuestionarios',
    component: CustionarioListComponent
  },
  {
    path: 'cuestionarios/editar/:idCuestionario',
    component: CustionarioFormComponent
  },
  {
    path: 'cuestionarios/contestar',
    component: CuestionarioListAllComponent
  },
  {
    path: 'miPerfil',
    component: MyProfileComponent
  },
  {
    path: 'cuestionarios/contestar/:idCuestionario',
    component: CuestionarioFillComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
