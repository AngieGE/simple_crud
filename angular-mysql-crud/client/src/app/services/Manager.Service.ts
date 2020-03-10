import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from  '../models/Usuario';

@Injectable({ providedIn: 'root' })
export class ManagerService {
  API_URL = 'http://localhost:3000';
  usuario: Usuario;
}
