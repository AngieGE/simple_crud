import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustionarioListComponent } from './components/custionario-list/custionario-list.component';
import { CustionarioFormComponent } from './components/custionario-form/custionario-form.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cuestionarios',
    pathMatch: 'full'
  },
  {
    path: 'cuestionarios',
    component: CustionarioListComponent
  },
  {
    path: 'cuestionarios/crear',
    component: CustionarioFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
