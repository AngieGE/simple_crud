import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/index';
import { UsuarioService, ManagerService } from '../../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  usuario: Usuario;
  userExists: boolean;
  wrongP: boolean;
  wrongData: boolean;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    this.userExists = false;
    this.wrongP = false;
    this.wrongData = false;
  }

  registrarUsuario() {

    if (this.usuario.nombre == null || this.usuario.apellido == null || this.usuario.contrasena == null ||
      this.usuario.contrasena2 == null || this.usuario.usuario == null || this.usuario.fechaNacimiento == null ||
      this.usuario.genero == null || this.usuario.nombre === '' || this.usuario.apellido === '' || this.usuario.contrasena === '' ||
      this.usuario.contrasena2 === '' || this.usuario.usuario === '' ||
      (this.usuario.genero !== 1 && this.usuario.genero !== 0)) {
      this.wrongData = true;
      this.wrongP = false;
      this.userExists = false;
    } else if (this.usuario.contrasena !== this.usuario.contrasena2) {
      this.wrongP = true;
      this.wrongData = false;
      this.userExists = false;
    } else {
      this.wrongData = false;
      this.wrongP = false;
      this.usuarioService.crearUsuario(this.usuario)
        .subscribe(res => {
          console.log(res);
          if (!res.saved) {
            this.userExists = true;
          } else {
            this.userExists = false;
          }

        });
    }


  }

}
