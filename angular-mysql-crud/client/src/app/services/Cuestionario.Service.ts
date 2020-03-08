import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuestionario } from '../models';
import { ManagerService } from './Manager.Service';

@Injectable({ providedIn: 'root' })
export class CuestionarioService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  static async listarCuestionarios(): Observable<Cuestionario[]> {
    // Params

    // Headers

    // Request
  }

  static async crearCuestionario(cuestionario: Cuestionario): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async obtenerCuestionario(idCuestionario: number): Observable<Cuestionario> {
    // Params

    // Headers

    // Request
  }

  static async actualizarCuestionario(idCuestionario: number, cuestionario: Cuestionario): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async eliminarCuestionario(idCuestionario: number): Observable<any> {
    // Params

    // Headers

    // Request
  }

}
