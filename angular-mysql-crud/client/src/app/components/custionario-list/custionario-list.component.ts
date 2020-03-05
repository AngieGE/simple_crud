import {Component, DebugElement, HostBinding, OnInit} from '@angular/core';
import { CuestionariosService } from '../../services/cuestionarios.service';
import {Router} from '@angular/router';
import {Cuestionario} from "../../models/Cuestionario";
@Component({
  selector: 'app-custionario-list',
  templateUrl: './custionario-list.component.html',
  styleUrls: ['./custionario-list.component.css']
})
export class CustionarioListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  cuestionarios: any = [];
  nombre: string;
  apellido: string;
  saludo: string;
  constructor(private cuestionariosService: CuestionariosService, private router: Router ) {
      localStorage.setItem('rout', router.url) ;
  }

  ngOnInit(): void {
    this.getCuestionarios();
    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellido');
    this.saludo = localStorage.getItem('saludo');
  }

  getCuestionarios() {
    console.log(localStorage.getItem('id'));
    this.cuestionariosService.getCuestionarios(localStorage.getItem('id')).subscribe(
      res => {
        this.cuestionarios = res;
        console.log(this.cuestionarios);
      },
      err => {
        console.log(err);

      }
    );
  }

  deleteCuestionario(id: string){
    this.cuestionariosService.deleteCuestionario(id).subscribe(
      res=> {
          this.getCuestionarios();
      },
      err =>{
        console.log(err);
      }
    );
  }

}
