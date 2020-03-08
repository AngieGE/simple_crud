import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManagerService } from './Manager.Service';

import { Aplicacion } from '../models';

@Injectable({ providedIn: 'root' })
export class AplicacionService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  static async listarAplicaciones(): Observable<Aplicacion[]> {
    // Params

    // Headers

    // Request
  }

  static async crearAplicacion(aplicacion: Aplicacion): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async obtenerAplicacion(idAplicacion: number): Observable<Aplicacion> {
    // Params

    // Headers

    // Request
  }

  static async actualizarAplicacion(idAplicacion: number, aplicacion: Aplicacion): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async eliminarAplicacion(idAplicacion: number): Observable<any> {
    // Params

    // Headers

    // Request
  }

}
