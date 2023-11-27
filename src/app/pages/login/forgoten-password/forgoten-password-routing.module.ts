import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotenPasswordPage } from './forgoten-password.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotenPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotenPasswordPageRoutingModule {}
