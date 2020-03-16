import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { Cuestionario, PreguntaRequest, Opcion, Pregunta, _TipoPregunta } from '../../models/index';
import { CuestionarioService, PreguntaService, OpcionService } from '../../services/index';
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
  constructor(private cuestionariosServices: CuestionarioService, private preguntaService: PreguntaService,
              private opcionService: OpcionService, private router: Router, private activatedRoute: ActivatedRoute) {
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

}
