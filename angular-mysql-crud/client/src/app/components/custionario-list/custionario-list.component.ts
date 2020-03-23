import {Component, DebugElement, HostBinding, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {Cuestionario, Usuario} from '../../models/index';
import {ManagerService, CuestionarioService} from '../../services/index';

@Component({
  selector: 'app-custionario-list',
  templateUrl: './custionario-list.component.html',
  styleUrls: ['./custionario-list.component.css']
})
export class CustionarioListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  @ViewChild('closeModal') private closeModal: ElementRef;
  cuestionarios: any = [];
  usuario: Usuario;
  searchText: string;
  elements: any = [];  
  limite: string = '100';

  cuestionario: Cuestionario = {
    idCuestionario: null,
    nombre: '',
    descripcion: '',
    idUsuario: null,
    activa: 0,
  };

  constructor(private cuestionariosService: CuestionarioService, private router: Router, private manager: ManagerService) {
      localStorage.setItem('rout', router.url) ;
  }

  ngOnInit(): void {
      this.usuario = this.manager.usuario;
      this.getCuestionarios();
      this.cuestionario.idUsuario = this.manager.usuario.idUsuario;
  }

  getCuestionarios() {
    const id: number = this.usuario.idUsuario;
    this.cuestionariosService.listarCuestionarios(id, null)
      .subscribe(
      res => {
        console.log(res);
        this.cuestionarios = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteCuestionario(id: number) {
    this.cuestionariosService.eliminarCuestionario(id).subscribe(
      res => {
          this.getCuestionarios();
      },
      err => {
        console.log(err);
      }
    );
  }

  crearCuestionario() {
    this.cuestionariosService.crearCuestionario(this.cuestionario)
      .subscribe( res => {
        console.log(this.cuestionario);
        console.log(res);
        this.getCuestionarios();
        this.closeModal.nativeElement.click();
      }, err => {
        console.error(err );
      });
  }

  editarCuestionario(idCuestionario: number) {
    this.router.navigate(['/cuestionarios/editar/', idCuestionario]);
  }

  resultadosCuestionario(idCuestionario: number) {
    this.router.navigate(['/cuestionarios/resultados/', idCuestionario]);
  }

}
