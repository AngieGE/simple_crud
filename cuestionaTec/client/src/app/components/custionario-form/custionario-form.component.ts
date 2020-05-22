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
  @ViewChild('closeModalOpcionEditar') private closeModalOpcionEditar: ElementRef;

  cuestionario?: Cuestionario = new Cuestionario();

  listTipos = _TipoPregunta.listTipos;
  pregunta?: PreguntaRequest = new PreguntaRequest();
  opcion?: OpcionRequest = new OpcionRequest();

  laOpcionString?: string;
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
            this.listarOpciones();
          }, err => {
            console.log(err);
          });
      }, err => {
        console.log(err);
      });
  }

  listarOpciones() {
    //Obtener todas las opciones
    for (const pregunta of this.cuestionario.preguntas) {
      if (pregunta.tipoPregunta.tipo !== _TipoPregunta.TipoPreguntaEnum.ABIERTA) {
        this.opcionService.listarOpcions(null, pregunta.idPregunta).subscribe(opciones => {
          pregunta.opciones = opciones.map((item: Opcion) => new Opcion(item));
        });
      }
    }
  }

  ///////////////////////////   ASIGNACIONES ////////////////////////////////////
  asignarPregunta(idPregunta: number) {
    this.opcion.idPregunta = idPregunta;
    console.log("Agregando una opcion a la pregunta " +   this.opcion.idPregunta);
  }
  asignarOpcion( opcion: OpcionRequest){
    this.opcion=opcion;
    this.laOpcionString =this.opcion['catalogoOpcion'].opcion;
  }

  ///////////////////////////   PREGUNTA ////////////////////////////////////
  agregarPregunta() {
    console.log(this.pregunta);
    this.preguntaService.crearPregunta(this.pregunta)
      .subscribe( res => {
        console.log(res);
        this.closeModal.nativeElement.click();
        this.pregunta.pregunta = '';
        this.cargarCuestionario();
      }, err => {
        console.log(err);
      });
  }

  eliminarPregunta(idPregunta: number) {
      this.preguntaService.eliminarPregunta(idPregunta)
        .subscribe( res => {
          console.log(res);
          this.cargarCuestionario();
        }, err => {
          console.log(err);
        });
  }
  ///////////////////////////   OPCIONES ////////////////////////////////////
  agregarOpcion(){
      console.log(this.opcion);
      this.opcionService.crearOpcion(this.opcion)
        .subscribe( res => {
            console.log(res);
          this.closeModalOpcion.nativeElement.click();
          this.opcion.opcion = '';
          this.listarOpciones();
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
          this.listarOpciones();
        }, err => {
          console.log(err);
          console.log('err');
        });
  }

  editarOpcion() {
      console.log('editando');
      this.opcion.opcion = this.laOpcionString;
    console.log(this.opcion);
      this.opcionService.actualizarOpcion(this.opcion.idOpcion, this.opcion)
        .subscribe( res => {
          console.log(res);
          this.listarOpciones();
          this.closeModalOpcionEditar.nativeElement.click();
          this.laOpcionString = '';
        }, err => {
          console.log(err);
        });
  }
}
