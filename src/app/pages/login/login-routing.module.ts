import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'forgoten-password',
    loadChildren: () => import('./forgoten-password/forgoten-password.module').then( m => m.ForgotenPasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
