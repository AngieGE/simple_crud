import {Component, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
import { Cuestionario, PreguntaRequest, Opcion, Pregunta } from '../../models/index';
import { CuestionarioService, PreguntaService } from '../../services/index'
import {provideRoutes} from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../services';

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
  };
  preguntas: Pregunta[] = new Array(0);
  opcion: Opcion;

  pregunta: PreguntaRequest = new PreguntaRequest();
  opciones: Opcion[];

  constructor(private cuestionariosServices: CuestionarioService, private preguntaService: PreguntaService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.cuestionario.idCuestionario = +this.activatedRoute.snapshot.paramMap.get('idCuestionario');
  }

  ngOnInit(): void {
    // obtener la info genereal de cuestionario
    this.cuestionariosServices.obtenerCuestionario( this.cuestionario.idCuestionario)
      .subscribe( res => {
        this.cuestionario = res;
        this.pregunta.idCuestionario = this.cuestionario.idCuestionario;
      }, err => {
        console.log(err);
      });

    // Obtener todas las preguntas
    this.listarPreguntas();
  }

  guardarCambios() {
    // update cuestionario
    this.actualizarCuestionario();
  }

  actualizarCuestionario() {
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

  agregarPregunta() {
    console.log(this.cuestionario);
    this.preguntaService.crearPregunta(this.pregunta)
      .subscribe( res => {
        console.log(res);
        this.closeModal.nativeElement.click();
        this.listarPreguntas();
      }, err => {
        console.log(err);
      });
   // this.closeModal.nativeElement.click();
  }

  listarPreguntas() {
    // Obtener todas las preguntas
    this.preguntaService.listarPreguntas(this.cuestionario.idCuestionario)
      .subscribe( res => {
        console.log(res);
        // QERIA HACER ESTO PERO NO SE PUEDE :(
        this.preguntas = res;
      }, err => {
        console.log(err);
      });
  }
}
