import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuestionario, Pregunta, Opcion, _TipoPregunta, RespuestaMultiple, RespuestaAbierta } from 'src/app/models';
import { CuestionarioService, PreguntaService, OpcionService, RespuestaAbiertaService, RespuestaMultipleService } from 'src/app/services';

@Component({
  selector: 'app-cuestionario-results',
  templateUrl: './cuestionario-results.component.html',
  styleUrls: ['./cuestionario-results.component.css']
})
export class CuestionarioResultsComponent implements OnInit {
  TipoPreguntaEnum = _TipoPregunta.TipoPreguntaEnum;
  cuestionario: Cuestionario;

  public chartColors: Array<any> = [{
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
  }];
  public chartOptions: any = { responsive: true };

  constructor(
    private cuestionariosServices: CuestionarioService, private preguntaService: PreguntaService,
    private opcionService: OpcionService, private respuestaAbiertaervice: RespuestaAbiertaService,
    private respuestaMultipleService: RespuestaMultipleService,
    private router: Router, private activatedRoute: ActivatedRoute
  ) {
    this.cuestionario = new Cuestionario();
    this.cuestionario.idCuestionario = parseInt(this.activatedRoute.snapshot.paramMap.get('idCuestionario'), 10);
  }

  ngOnInit(): void {
    this.cuestionariosServices.obtenerCuestionario(this.cuestionario.idCuestionario).subscribe(cuestionario => {
      this.cuestionario = new Cuestionario(cuestionario);
      this.preguntaService.listarPreguntas(this.cuestionario.idCuestionario).subscribe(preguntas => {
        this.cuestionario.preguntas = preguntas.map((item: Pregunta) => new Pregunta(item));
        for (const pregunta of this.cuestionario.preguntas) {
          if (pregunta.tipoPregunta.tipo !== _TipoPregunta.TipoPreguntaEnum.ABIERTA) {
            this.opcionService.listarOpcions(null, pregunta.idPregunta).subscribe(opciones => {
              pregunta.opciones = opciones.map((item: Opcion) => new Opcion(item));
              for (const opcion of pregunta.opciones) {
                this.respuestaMultipleService.listarRespuestaMultiples(null, opcion.idOpcion).subscribe(
                  respuestas => {
                    opcion.respuestasMultiples = respuestas.map((item: any) => new RespuestaMultiple(item));
                    pregunta.setChart();
                });
              }
            });
          } else {
            this.respuestaAbiertaervice.listarRespuestaAbiertas(null, pregunta.idPregunta).subscribe(
              respuestas => {
                pregunta.respuestasAbiertas = respuestas.map((item: any) => new RespuestaAbierta(item));
            });
          }
        }
      });

    });
  }

}
