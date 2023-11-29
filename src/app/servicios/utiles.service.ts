import { Injectable, inject } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { alumno } from './alumnosModel';

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
