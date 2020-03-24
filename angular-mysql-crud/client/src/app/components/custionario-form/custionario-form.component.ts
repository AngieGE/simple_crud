import {Component, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
import {Cuestionario, PreguntaRequest, Opcion, OpcionRequest,Pregunta, _TipoPregunta} from '../../models/index';
import { CuestionarioService, PreguntaService, OpcionService } from '../../services/index';
import {provideRoutes} from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-custionario-form',
  templateUrl: './custionario-form.component.html',
  styleUrls: ['./custionario-form.component.css']
})

export class CustionarioFormComponent implements OnInit {

  @ViewChild('closeModal') private closeModal: ElementRef;
  @ViewChild('closeModalOpcion') private closeModalOpcion: ElementRef;
  @ViewChild('closeModalOpcionEditar') private closeModalOpcionEditar: ElementRef;
  @ViewChild('closeModalPreguntaEditar') private closeModalPreguntaEditar: ElementRef;

  cuestionario?: Cuestionario = new Cuestionario();

  listTipos = _TipoPregunta.listTipos;

  pregunta?: PreguntaRequest = new PreguntaRequest();
  opcion?: OpcionRequest = new OpcionRequest();

  eliminandoPregunta?: boolean = false;

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
        this.listarPreguntas(true);
      }, err => {
        console.log(err);
      });
  }

  listarPreguntas(listarOpciones: boolean) {
    this.preguntaService.listarPreguntas(this.cuestionario.idCuestionario)
      .subscribe( resPreguntas => {
        this.cuestionario.preguntas = resPreguntas.map((item: Pregunta) => new Pregunta(item));

        //Obtener todas las opciones
        if (listarOpciones == true ) {
          this.listarOpciones();
        }
      }, err => {
        console.log(err);
      });
  }


  listarOpciones(idPregunta?: number) {
    //Obtener todas las opciones
    if (idPregunta) {
      this.preguntaService.obtenerPregunta(idPregunta)
          .subscribe( pregunta => {
            if (pregunta.tipoPregunta.tipo !== _TipoPregunta.TipoPreguntaEnum.ABIERTA) {
              this.opcionService.listarOpcions(null, pregunta.idPregunta).subscribe(opciones => {
                pregunta.opciones = opciones.map((item: Opcion) => new Opcion(item));
              });
            }
          }, err => {console.log(err)});
    } else {
      for (const pregunta of this.cuestionario.preguntas) {
        if (pregunta.tipoPregunta.tipo !== _TipoPregunta.TipoPreguntaEnum.ABIERTA) {
          this.opcionService.listarOpcions(null, pregunta.idPregunta).subscribe(opciones => {
            pregunta.opciones = opciones.map((item: Opcion) => new Opcion(item));
          });
        }
      }      
    }


  }


  ///////////////////////////   ASIGNACIONES ////////////////////////////////////
  asignarPregunta(pregunta: Pregunta) {
    this.pregunta =  new Pregunta(pregunta).toPreguntaRequest();
  }

  asignarOpcion( opcion: Opcion){
    this.opcion = new Opcion(opcion).toOpcionRequest();
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
    console.log('eliminar pregunta');
    this.eliminandoPregunta = true;

      this.preguntaService.eliminarPregunta(idPregunta)
        .subscribe( res => {
          console.log(res);
          this.eliminandoPregunta = false;
          this.listarPreguntas(false);
        }, err => {
          console.log(err);
        });
  }

  editarPregunta() {
    if (this.eliminandoPregunta == true ) return;
    console.log('editar pregunta');
    console.log(this.pregunta);
    this.preguntaService.actualizarPregunta(this.pregunta.idPregunta, this.pregunta)
      .subscribe( res => {
        console.log(res);
        this.cargarCuestionario();
        this.closeModalPreguntaEditar.nativeElement.click();
      }, err => {
        console.log(err);
      });
  }

  AbrirModalEditarPregunta() {
    if (this.eliminandoPregunta == true ) return;
    // abro modal
    document.getElementById("openModalButton").click();
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

  eliminarOpcion(idOpcion: number, pregunta: Pregunta) {
      console.log('eliminando la opcion' + idOpcion)
      this.opcionService.eliminarOpcion(idOpcion)
        .subscribe( res => {
          console.log(res);
          //Volver a listar las opciones de esta pregunta
          this.listarOpciones(pregunta.idPregunta);
        }, err => {
          console.log(err);
          console.log('err');
        });
  }

  editarOpcion() {
      console.log('editando');
      console.log(this.opcion);
      console.log(this.opcion.idOpcion);
      console.log(this.opcion.idPregunta);

      this.opcionService.actualizarOpcion(this.opcion.idOpcion, this.opcion)
        .subscribe( res => {
          console.log(res); //No me imprime esto PEEERO si le hace el update
          this.closeModalOpcionEditar.nativeElement.click();
          this.listarOpciones(this.opcion.idPregunta);
        }, err => {
          console.log(err);
        });
  }
}
