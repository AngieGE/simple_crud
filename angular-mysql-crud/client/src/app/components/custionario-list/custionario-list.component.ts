import {Component, DebugElement, HostBinding, OnInit} from '@angular/core';
import { CuestionariosService } from '../../services/cuestionarios.service';
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

  constructor(private cuestionariosService: CuestionariosService ) { }

  ngOnInit(): void {
    this.getCuestionarios();
    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellido');
    console.log(this.nombre + this.apellido); // da undefined
  }

  getCuestionarios(){
    this.cuestionariosService.getCuestionarios().subscribe(
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
    console.log("delete game "+id);
    this.cuestionariosService.deleteCuestionario(id).subscribe(
      res=> {
          this.getCuestionarios();
      },
      err =>{
        console.log(err);
      }
    )
  }

}
