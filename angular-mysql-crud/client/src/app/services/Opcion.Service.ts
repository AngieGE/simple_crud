import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opcion, OpcionRequest } from '../models';
import { ManagerService } from './Manager.Service';

@Injectable({ providedIn: 'root' })
export class OpcionService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  static async listarOpcions(): Observable<Opcion[]> {
    // Params

    // Headers

    // Request
  }

  static async crearOpcion(opcion: OpcionRequest): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async obtenerOpcion(idOpcion: number): Observable<Opcion> {
    // Params

    // Headers

    // Request
  }

  static async actualizarOpcion(idOpcion: number, opcion: OpcionRequest): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async eliminarOpcion(idOpcion: number): Observable<any> {
    // Params

    // Headers

    // Request
  }

}
