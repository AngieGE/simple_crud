import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustionarioListComponent } from './components/custionario-list/custionario-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cuestionarios',
    pathMatch: 'full'
  },
  {
    path: 'cuestionarios',
    component: CustionarioListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
