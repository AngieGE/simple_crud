import {Component, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
import {Cuestionario, PreguntaRequest, Opcion, OpcionRequest,Pregunta, _TipoPregunta} from '../../models/index';
import { CuestionarioService, PreguntaService, OpcionService } from '../../services/index';
import {provideRoutes} from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custionario-form',
  templateUrl: './custionario-form.component.html',
  styleUrls: ['./custionario-form.component.css']
})

export class CustionarioFormComponent implements OnInit {

  @ViewChild('closeModal') private closeModal: ElementRef;
  @ViewChild('closeModalOpcion') private closeModalOpcion: ElementRef;

  cuestionario?: Cuestionario = new Cuestionario();

  listTipos = _TipoPregunta.listTipos;
  pregunta?: PreguntaRequest = new PreguntaRequest();
  opcion?: OpcionRequest = new OpcionRequest();

  idPregunta?: number;      //El id de la pregunta a la que pertenece la opcion

  constructor(private cuestionariosServices: CuestionarioService, private preguntaService: PreguntaService,
              private opcionService: OpcionService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.cuestionario.idCuestionario = +this.activatedRoute.snapshot.paramMap.get('idCuestionario');
    this.pregunta.idCuestionario = +this.activatedRoute.snapshot.paramMap.get('idCuestionario');
  }

  ngOnInit(): void {
    this.cuestionario.idCuestionario = parseInt(this.activatedRoute.snapshot.paramMap.get('idCuestionario'), 10);
    this.cargarCuestionario();
  }

  cargarCuestionario() {
    // obtener la info genereal de cuestionario
    this.cuestionariosServices.obtenerCuestionario( this.cuestionario.idCuestionario)
      .subscribe( resCuestionario => {
        this.cuestionario = resCuestionario;

        // Obtener todas las preguntas
        this.preguntaService.listarPreguntas(this.cuestionario.idCuestionario)
          .subscribe( resPreguntas => {
            this.cuestionario.preguntas = resPreguntas.map((item: Pregunta) => new Pregunta(item));

            //Obtener todas las opciones
            for (const pregunta of this.cuestionario.preguntas) {
              if (pregunta.tipoPregunta.tipo !== _TipoPregunta.TipoPreguntaEnum.ABIERTA) {
                this.opcionService.listarOpcions(null, pregunta.idPregunta).subscribe(opciones => {
                  pregunta.opciones = opciones.map((item: Opcion) => new Opcion(item));
                });
              }
            }
          }, err => {
            console.log(err);
          });
      }, err => {
        console.log(err);
      });
  }

  guardarCambios() {

  }

  agregarPregunta() {
    console.log(this.pregunta);
    this.preguntaService.crearPregunta(this.pregunta)
      .subscribe( res => {
          console.log(res);
          this.closeModal.nativeElement.click();
          this.cargarCuestionario();
        }, err => {
        console.log(err);
      });
  }


  ///////////////////////////   OPCIONES ////////////////////////////////////
  asignarIdPregunta(idPregunta: number) {
    this.opcion.idPregunta = idPregunta;
    console.log("Agregando una opcion a la pregunta " + this.idPregunta);
  }

  agregarOpcion(){
      console.log(this.opcion);
      this.opcionService.crearOpcion(this.opcion)
        .subscribe( res => {
            console.log(res);
          this.closeModalOpcion.nativeElement.click();
          //Obtener todas las opciones
          for (const pregunta of this.cuestionario.preguntas) {
            if (pregunta.tipoPregunta.tipo !== _TipoPregunta.TipoPreguntaEnum.ABIERTA) {
              this.opcionService.listarOpcions(null, pregunta.idPregunta).subscribe(opciones => {
                pregunta.opciones = opciones.map((item: Opcion) => new Opcion(item));
              });
            }
          }
        }, err => {
            console.log(err);
        });
  }

  eliminarOpcion(idOpcion: number) {
      console.log('eliminando la opcion' + idOpcion)
      this.opcionService.eliminarOpcion(idOpcion)
        .subscribe( res => {
          console.log(res);
          //Obtener todas las opciones
          for (const pregunta of this.cuestionario.preguntas) {
            if (pregunta.tipoPregunta.tipo !== _TipoPregunta.TipoPreguntaEnum.ABIERTA) {
              this.opcionService.listarOpcions(null, pregunta.idPregunta).subscribe(opciones => {
                pregunta.opciones = opciones.map((item: Opcion) => new Opcion(item));
              });
            }
          }
        }, err => {
          console.log(err);
          console.log('err');
        });
  }

}
