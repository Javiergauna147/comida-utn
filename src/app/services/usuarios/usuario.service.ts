import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario, UsuarioResponse } from './usuario.interface';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private urlUsuario: string = environment.API_BASE_ENDPOINT + '/usuario';

  private usuarioStorage = localStorage.getItem('usuario');
  private tokenStorakge = localStorage.getItem('token');
  
  constructor(private http: HttpClient) { }

  login(user: {email: string, clave: string}): Observable<UsuarioResponse>{
    return this.http.post<UsuarioResponse>(`${this.urlUsuario}/login`, user);
  }
  guardarToken(token: string){
    localStorage.setItem('token', token);
  }
  guardarUsuario(usuario: Usuario){
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  obtenerUsuario(){
    return JSON.parse(this.usuarioStorage || '{}');
  }
  obtenerToken(){
    return this.tokenStorakge;
  }
}
