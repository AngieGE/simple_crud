import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Usuario} from '../../models/index';
import {ManagerService, UsuarioService, AplicacionService, CuestionarioService} from '../../services';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent implements OnInit {
  editando: boolean;
  usuario: Usuario;
  cuestionariosActivos: number = 0;
  //cuestionariosEliminados: number = 0;
  respuestasRecibidas: number = 0;
  respuestasEnviadas: number = 0;



  constructor(public datepipe: DatePipe, private manager: ManagerService, private usuarioService: UsuarioService,
              private aplicacionService: AplicacionService, private cuestionarioService: CuestionarioService) {
    this.editando = false;
  }

  ngOnInit(): void {
   this.usuario = new Usuario(this.manager.usuario);
   this.usuario.localFechaNacimiento = this.datepipe.transform(this.usuario.fechaNacimiento, 'yyyy-MM-dd');
    
   this.aplicacionService.listarAplicaciones(this.manager.usuario.idUsuario, null)
        .subscribe(res =>{ console.log(res.length); this.respuestasEnviadas = res.length;});
    
    this.cuestionarioService.listarCuestionarios(this.manager.usuario.idUsuario, null)
        .subscribe(cuestionarios => {  
          this.cuestionariosActivos = cuestionarios.length
          cuestionarios.forEach(element => {
            console.log(element.idCuestionario);
            this.aplicacionService.listarAplicaciones(null, element.idCuestionario)
                .subscribe(res => {this.respuestasRecibidas += res.length;});
          });
        },err => {console.log(err);});

    
  }

  editar( editando: boolean) {
    this.editando = editando;
  }

  saveChanges() {
    this.usuario.genero = this.usuario.localGenero === 'Mujer' ? 1 : 0;
    this.usuario.fechaNacimiento = new Date(this.usuario.localFechaNacimiento);
    this.usuarioService.actualizarUsuario(this.usuario.idUsuario, this.usuario).subscribe(
      res => {

    });
    this.manager.usuario = this.usuario;

    this.editar(false);
  }

}
