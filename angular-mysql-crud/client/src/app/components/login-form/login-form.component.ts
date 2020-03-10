import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/index';
import { Router } from '@angular/router';
import {ManagerService} from '../../services/Manager.Service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  rout: string;

  us: Usuario = {
    idUsuario : 0,
    nombre: '',
    apellido: '',
    contrasena: '',
    usuario: '',
    fechaNacimiento: new Date(),
    genero: 1
  }

  enterWrongUserData: boolean;

  constructor(private usuarioService: UsuarioService, private  router: Router, private manager: ManagerService) {
    this.rout = router.url;

  }

  ngOnInit(): void {
    this.enterWrongUserData = false;
  }

  iniciarSesion() {
    delete this.us.idUsuario;
    this.resetVar();
    this.usuarioService.login(this.us.usuario, this.us.contrasena)
      .subscribe( res => {
        console.log(res);
        if (res.usuario == null) {
          this.enterWrongUserData = true;
        } else {
          this.manager.usuario = res.usuario;
          this.router.navigate(['/cuestionarios']);
        }
      }, err => {
        console.error(err );
      });
  }

  resetVar() {
    this.enterWrongUserData = false;
  }
}
