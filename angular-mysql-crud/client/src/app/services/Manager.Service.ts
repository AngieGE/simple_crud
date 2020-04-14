import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from  '../models/Usuario';

@Injectable({ providedIn: 'root' })
export class ManagerService {
  API_URL = 'http://localhost:3000'; //la url del servidor google  'http://35.235.89.179:3000';
  usuario: Usuario;

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    if (this.usuario == null) {
      this.usuario = new Usuario();
    }

  }

  public setUsuario(usuario: Usuario) {
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }

}
