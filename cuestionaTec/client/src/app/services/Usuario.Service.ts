import {DebugElement, Injectable} from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../models';
import { ManagerService } from './Manager.Service';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  public login(usuario: string, contrasena: string): Observable<any> {
      console.log('service: ' + usuario + contrasena)
      // Params
      let params = new HttpParams();
      params = params.set('usuario', usuario);
      params = params.set('contrasena', contrasena);

      // Headers
      let headers = this.defaultHeaders;
      headers = headers.set('Accept', 'application/json');
      headers = headers.set('Content-Type', 'application/json');

      // Request
      return this.http.get(`${this.manager.API_URL}/usuario/login`, { params, headers });
  }

  public listarUsuarios(nombre?: string): Observable<Usuario[]> {
    // Params
    let params = new HttpParams();
    if (nombre !== undefined && nombre !== null) {
      params = params.set('nombre', nombre);
    }

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<Usuario[]>(`${this.manager.API_URL}/usuario`, { params, headers } );
  }

  public crearUsuario(usuario: Usuario): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.post<Usuario>(`${this.manager.API_URL}/usuario`, usuario, { headers } );
  }

  public obtenerUsuario(idUsuario: number): Observable<Usuario> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<Usuario>(`${this.manager.API_URL}/usuario/${idUsuario}`, { headers } );
  }

  public actualizarUsuario(idUsuario: number, usuario: Usuario): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.put<Usuario>(`${this.manager.API_URL}/usuario/${idUsuario}`, usuario, { headers } );
  }

  public eliminarUsuario(idUsuario: number): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.delete(`${this.manager.API_URL}/usuario/${idUsuario}`, { headers } );
  }

}
