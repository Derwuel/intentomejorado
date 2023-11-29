import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UtilesService } from 'src/app/servicios/utiles.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  utilesSer = inject(UtilesService)

  constructor() {
   }

  ngOnInit() {
  }

  submit(){
    console.log(this.form.value);
  }

}
