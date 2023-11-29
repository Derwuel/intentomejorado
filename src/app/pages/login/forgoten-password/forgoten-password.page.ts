import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilesService } from 'src/app/servicios/utiles.service';

@Component({
  selector: 'app-forgoten-password',
  templateUrl: './forgoten-password.page.html',
  styleUrls: ['./forgoten-password.page.scss'],
})
export class ForgotenPasswordPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  utilesSer = inject(UtilesService)

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.form.value);
  }

}
