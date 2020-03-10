import { Component, OnInit, HostBinding } from '@angular/core';
import { Cuestionario } from '../../models/Cuestionario';
import { CuestionarioService } from '../../services/Cuestionario.Service'
import {provideRoutes} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custionario-form',
  templateUrl: './custionario-form.component.html',
  styleUrls: ['./custionario-form.component.css']
})
export class CustionarioFormComponent implements OnInit {


  cuestionario: Cuestionario = {
    idCuestionario: 0,
    nombre: '',
    descripcion: '',
    idUsuario: 0,
    activa: 1
  }

  constructor(private cuestionariosServices: CuestionarioService, private router: Router) { }

  ngOnInit(): void {}

  saveNewCuestionario() {
    delete this.cuestionario.idCuestionario;

    if (this.cuestionario.nombre.length > 0 && this.cuestionario.descripcion.length > 0 ) {

      this.cuestionariosServices.crearCuestionario(this.cuestionario)
        .subscribe( res => {
          console.log(res);
          this.router.navigate(['/cuestionarios']);
        }, err => {
          console.error(err);
        });
    }
  }
}
