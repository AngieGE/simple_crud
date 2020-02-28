import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustionarioListComponent } from './components/custionario-list/custionario-list.component';
import { CustionarioFormComponent } from './components/custionario-form/custionario-form.component'
import { LoginFormComponent } from './components/login-form/login-form.component';

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
    path: 'cuestionarios',
    component: CustionarioListComponent
  },
  {
    path: 'cuestionarios/crear',
    component: CustionarioFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
