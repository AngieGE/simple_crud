import {Component, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
import { Cuestionario, PreguntaRequest, Opcion, Pregunta } from '../../models/index';
import { CuestionarioService, PreguntaService } from '../../services/index';
import {provideRoutes} from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuestionario-fill',
  templateUrl: './cuestionario-fill.component.html',
  styleUrls: ['./cuestionario-fill.component.css']
})
export class CuestionarioFillComponent implements OnInit {

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
