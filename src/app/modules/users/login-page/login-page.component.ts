import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';

import { UsuarioService } from '../../../services/usuarios/usuario.service';
import { UsuarioResponse } from '../../../services/usuarios/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  respuestaError: boolean = false;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  logearse(){
    if(this.loginForm.invalid){
      return;
    }
    let usuarioPayload = {
      email: this.loginForm.value.email,
      clave: this.loginForm.value.password
    }
    this.usuarioService.login(usuarioPayload).pipe(
      catchError(err => {
        this.respuestaError = true;
        return of(err);
      })
    ).subscribe((res: UsuarioResponse) => {
      this.usuarioService.guardarToken(res.token);
      this.usuarioService.guardarUsuario(res.usuario);
      this.router.navigate(['/productos/catalogo'])
    })
  }

  get errorEmail(){
    return this.loginForm.controls['email'].errors && this.loginForm.controls['email'].touched;
  }
  get errorPassword(){
    return this.loginForm.controls['password'].errors && this.loginForm.controls['password'].touched;
  }
}
