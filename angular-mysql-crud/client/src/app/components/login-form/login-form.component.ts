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

  usuario: Usuario = {
    idUsuario :0,
    nombre: '',
    apellido: '',
    contrasena: '',
    usuario: '',
    fechaNacimiento: new Date(),
    genero: false
  }

  constructor(private loginService: LoginService, private  router: Router) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    delete this.usuario.idUsuario;

    this.loginService.getUsuario(this.usuario)
      .subscribe( res =>{
        if(res.usuario == null){

        }else{
          this.router.navigate(['/cuestionarios']);
          localStorage.setItem('idUsuario', res.usuario.idUsuario);
          localStorage.setItem('nombre', res.usuario.nombre);
          localStorage.setItem('apellido', res.usuario.apellido);
          console.log(res.usuario);
          console.log(res.usuario.nombre);
          console.log('apellido: '+res.usuario.apellido);
        }

      }, err => {
        console.error(err)
      });
  }
}
