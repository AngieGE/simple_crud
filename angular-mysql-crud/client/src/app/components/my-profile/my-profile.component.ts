import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Usuario} from '../../models/index';
import {ManagerService, UsuarioService} from '../../services';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent implements OnInit {
  editando: boolean;
  usuario: Usuario;

  constructor(public datepipe: DatePipe, private manager: ManagerService, private usuarioService: UsuarioService) {
    this.editando = false;
  }

  ngOnInit(): void {
   this.usuario = new Usuario(this.manager.usuario);
   this.usuario.localFechaNacimiento = this.datepipe.transform(this.usuario.fechaNacimiento, 'yyyy-MM-dd');
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
