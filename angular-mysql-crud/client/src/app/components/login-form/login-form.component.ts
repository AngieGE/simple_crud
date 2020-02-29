import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { LoginService } from '../../services/login.service'
import { Router } from '@angular/router';
import {Cuestionario} from "../../models/Cuestionario";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  rout: string;
  usuario: Usuario = {
    idUsuario :0,
    nombre: '',
    apellido: '',
    contrasena: '',
    usuario: '',
    fechaNacimiento: new Date(),
    genero: false
  }

  enterWrongUserData: boolean;
  constructor(private loginService: LoginService, private  router: Router) {
    this.rout = router.url;

  }

  ngOnInit(): void {
    this.enterWrongUserData = false;
  }

  iniciarSesion(){
    delete this.usuario.idUsuario;
    this.resetVar();
    this.loginService.getUsuario(this.usuario)
      .subscribe( res =>{
        if(res.usuario == null){
          this.enterWrongUserData = true;
        }else{
          this.router.navigate(['/cuestionarios']);
          localStorage.setItem('idUsuario', res.usuario.idUsuario);
          localStorage.setItem('nombre',JSON.parse(res.usuario).nombre);
          localStorage.setItem('apellido', JSON.parse(res.usuario).apellido);
          if (JSON.parse(res.usuario).genero == 1) {// es mujer
            localStorage.setItem('saludo', 'Bienvenida');
          }else{
            localStorage.setItem('saludo', 'Bienvenido');
          }
        }

      }, err => {
        console.error(err)
      });
  }

  resetVar(){
    this.enterWrongUserData=false;
  }
}
