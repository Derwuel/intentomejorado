import { Injectable, inject } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilesService {

  cargaLoading = inject(LoadingController);

  constructor() { }

  Loading(){
    return this.cargaLoading.create({ spinner: 'crescent' })
  }
  
}
