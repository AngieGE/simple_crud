import {Component, DebugElement, HostBinding, OnInit} from '@angular/core';
import { CuestionarioService } from '../../services/Cuestionario.Service';
import {Router} from '@angular/router';
import {Cuestionario, Usuario} from '../../models/index';
import {ManagerService} from '../../services/Manager.Service';

@Component({
  selector: 'app-custionario-list',
  templateUrl: './custionario-list.component.html',
  styleUrls: ['./custionario-list.component.css']
})
export class CustionarioListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  cuestionarios: any = [];
  usuario: Usuario;

  constructor(private cuestionariosService: CuestionarioService, private router: Router, private manager: ManagerService) {
      localStorage.setItem('rout', router.url) ;
  }

  ngOnInit(): void {
      this.usuario = this.manager.usuario;
      this.getCuestionarios();


  }

  getCuestionarios() {
    const id: number = this.usuario.idUsuario;
    console.log(id);
    this.cuestionariosService.listarCuestionarios(id)
      .subscribe(
      res => {
        this.cuestionarios = res;
        console.log(this.cuestionarios);
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

}
