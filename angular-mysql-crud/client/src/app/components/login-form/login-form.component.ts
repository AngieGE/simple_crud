import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/index';
import { UsuarioService, ManagerService } from '../../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  rout: string;

  usuario: Usuario;

  enterWrongUserData: boolean;

  constructor(private usuarioService: UsuarioService, private  router: Router, private manager: ManagerService) {
    this.rout = router.url;
  }

  ngOnInit(): void {
    this.usuario = this.manager.usuario;
    this.enterWrongUserData = false;
  }

  iniciarSesion() {
    delete this.usuario.idUsuario;
    this.resetVar();
    this.usuarioService.login(this.usuario.usuario, this.usuario.contrasena)
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
