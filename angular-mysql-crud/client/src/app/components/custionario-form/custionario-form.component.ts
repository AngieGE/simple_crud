import {Component, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
import { Cuestionario, Pregunta, Opcion } from '../../models/index';
import { CuestionarioService, PreguntaService } from '../../services/index'
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
  pregunta: Pregunta = new Pregunta();
  opcion: Opcion;

  preguntas: Pregunta[];
  opciones: Opcion[];

  constructor(private cuestionariosServices: CuestionarioService, private preguntaService: PreguntaService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.cuestionario.idCuestionario = +this.activatedRoute.snapshot.paramMap.get("idCuestionario")
  }

  ngOnInit(): void {
    //obtener la info genereal de cuestionario
    this.cuestionariosServices.obtenerCuestionario( this.cuestionario.idCuestionario)
      .subscribe( res => {
        this.cuestionario = res;
        this.pregunta.idCuestionario = this.cuestionario.idCuestionario;
      }, err => {
        console.log(err);
      });

  }

  guardarCambios() {
    //update cuestionario
    this.actualizarCuestionario();
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
