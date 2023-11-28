import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotenPasswordPageRoutingModule } from './forgoten-password-routing.module';

import { ForgotenPasswordPage } from './forgoten-password.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotenPasswordPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ForgotenPasswordPage]
})
export class ForgotenPasswordPageModule {}
