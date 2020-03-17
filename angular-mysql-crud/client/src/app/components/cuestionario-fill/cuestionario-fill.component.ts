import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import {
  Cuestionario, PreguntaRequest, Opcion, Pregunta, _TipoPregunta, Aplicacion, RespuestaAbierta,
  RespuestaMultiple
} from '../../models/index';
import {
  CuestionarioService, PreguntaService, OpcionService, AplicacionService, ManagerService,
  RespuestaAbiertaService,
  RespuestaMultipleService
} from '../../services/index';
import { provideRoutes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { parseHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-cuestionario-fill',
  templateUrl: './cuestionario-fill.component.html',
  styleUrls: ['./cuestionario-fill.component.css']
})
export class CuestionarioFillComponent implements OnInit {
  cuestionario?: Cuestionario;
  aplicacion?: Aplicacion;
  respuestaAbierta?: RespuestaAbierta;
  respuestaMultiple?: RespuestaMultiple;

  constructor(private cuestionariosServices: CuestionarioService, private preguntaService: PreguntaService,
    private opcionService: OpcionService, private aplicacionService: AplicacionService,
    private respuestaMultipleService: RespuestaMultipleService, private router: Router,
    private activatedRoute: ActivatedRoute, private manager: ManagerService,
    private respuestaAbiertaService: RespuestaAbiertaService
  ) {
    this.cuestionario = new Cuestionario();
    this.cuestionario.idCuestionario = parseInt(this.activatedRoute.snapshot.paramMap.get('idCuestionario'), 10);
  }

  ngOnInit(): void {
    // obtener la info general de cuestionario
    this.cuestionariosServices.obtenerCuestionario(this.cuestionario.idCuestionario).subscribe(res => {
      this.cuestionario = new Cuestionario(res);

      this.preguntaService.listarPreguntas(this.cuestionario.idCuestionario).subscribe(preguntas => {
        this.cuestionario.preguntas = preguntas.map((item: Pregunta) => new Pregunta(item));
        for (const pregunta of this.cuestionario.preguntas) {
          if (pregunta.tipoPregunta.tipo !== _TipoPregunta.TipoPreguntaEnum.ABIERTA) {
            this.opcionService.listarOpcions(null, pregunta.idPregunta).subscribe(opciones => {
              pregunta.opciones = opciones.map((item: Opcion) => new Opcion(item));
            });
          }

        }
      });

    });

  }


  localSelected(pregunta?: Pregunta, opcionS?: Opcion) {
    if (pregunta.tipoPregunta.tipo === _TipoPregunta.TipoPreguntaEnum.OPCION_MULTIPLE) {
      for (const opcion of pregunta.opciones) {
        if (opcion !== opcionS) {
          opcion.localSelected = false;
        }
      }
    }
    opcionS.localSelected = !opcionS.localSelected;
  }

  guardarCuestionario() {
    // Crear y llenar aplicacion
    console.log('SI ENTRA AL BOTON');
    this.aplicacion = new Aplicacion();
    this.aplicacion.idCuestionario = this.cuestionario.idCuestionario;
    this.aplicacion.idUsuario = this.manager.usuario.idUsuario;
    this.aplicacionService.crearAplicacion(this.aplicacion).subscribe(
      idAp => {
        // Guardar respuestas abiertas
        for (const pregunta of this.cuestionario.preguntas) {
          // Guardar respuestas abiertas
          if (pregunta.tipoPregunta.tipo === _TipoPregunta.TipoPreguntaEnum.ABIERTA) {
            this.respuestaAbierta = new RespuestaAbierta();
            this.respuestaAbierta.respuesta = pregunta.localRespuestaAbierta.respuesta;
            this.respuestaAbierta.idPregunta = pregunta.idPregunta;
            console.log(idAp);
            this.respuestaAbierta.idAplicacion = idAp.inserted;
            this.respuestaAbiertaService.crearRespuestaAbierta(this.respuestaAbierta).subscribe(
              res => {
                console.log(res);
              });
            // Guardar respuestas opcion y seleccion multiple
          } else {
            this.respuestaMultiple = new RespuestaMultiple();
            this.respuestaMultiple.idAplicacion = idAp.inserted;
            this.respuestaMultiple.idPregunta = pregunta.idPregunta;
            for (const opcion of pregunta.opciones) {
              if (opcion.localSelected === true) {
                this.respuestaMultiple.idOpcion = opcion.idOpcion;
                this.respuestaMultipleService.crearRespuestaMultiple(this.respuestaMultiple).subscribe(
                  res => {
                    console.log(res);
                  });
              }
            }

          }
        }

      });

  }

}
