import { Component, OnInit, HostBinding } from '@angular/core';
import { Cuestionario } from '../../models/Cuestionario';
import { CuestionariosService } from '../../services/cuestionarios.service'
import {provideRoutes} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-custionario-form',
  templateUrl: './custionario-form.component.html',
  styleUrls: ['./custionario-form.component.css']
})
export class CustionarioFormComponent implements OnInit {

  //@HostBinding('class') classes = 'row';
  cuestionario: Cuestionario = {
    idEncuesta:0,
    nombre: '',
    descripcion: '',
    idUsuario: 0
  }

  constructor(private cuestionariosServices: CuestionariosService, private router:Router) { }

  ngOnInit(): void {}

  saveNewCuestionario(){
    delete this.cuestionario.idEncuesta;

    if (this.cuestionario.nombre.length > 0 && this.cuestionario.descripcion.length > 0 ){

      this.cuestionariosServices.saveCuestionario(this.cuestionario)
        .subscribe( res =>{
          console.log(res);
          this.router.navigate(['/cuestionarios']);
        }, err => {
          console.error(err)
        });
    }
  }
}
