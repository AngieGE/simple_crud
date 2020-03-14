import {Component, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
import { Cuestionario, Pregunta } from '../../models/index';
import { CuestionarioService } from '../../services/Cuestionario.Service'
import {provideRoutes} from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import {ManagerService} from "../../services";

@Component({
  selector: 'app-custionario-form',
  templateUrl: './custionario-form.component.html',
  styleUrls: ['./custionario-form.component.css']
})
export class CustionarioFormComponent implements OnInit {

  @ViewChild('closeModal') private closeModal: ElementRef;

  cuestionario: Cuestionario = {
    idCuestionario: 0,
    nombre: '',
    descripcion: '',
    idUsuario: 0,
    activa: 1
  }

 // pregunta: Pregunta = {

 // }

  constructor(private cuestionariosServices: CuestionarioService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.cuestionario.idCuestionario = +this.activatedRoute.snapshot.paramMap.get("idCuestionario")
  }

  ngOnInit(): void {
    this.cuestionariosServices.obtenerCuestionario( this.cuestionario.idCuestionario)
      .subscribe( res => {
        this.cuestionario = res;
      }, err => {
        console.log(err);
      });
  }

  guardarCambios() {
    //update cuestionario
    this.actualizarCuestionario();



    /*
    if (this.cuestionario.nombre.length > 0 && this.cuestionario.descripcion.length > 0 ) {
      this.cuestionariosServices.crearCuestionario(this.cuestionario)
        .subscribe( res => {
          console.log(res);
          this.router.navigate(['/cuestionarios']);
        }, err => {
          console.error(err);
        });
    }
    */
  }

  actualizarCuestionario(){
    console.log('actualizarCuestionario');
    this.cuestionariosServices.actualizarCuestionario(  this.cuestionario.idCuestionario, this.cuestionario)
      .subscribe( res => {
        console.log(res)
        this.router.navigate(['/cuestionarios/']);
      }, err => {
        console.log(err);

      });
    return  false;
  }

  agregarPregunta(){
    console.log(this.cuestionario);

   // this.closeModal.nativeElement.click();


  }
}
