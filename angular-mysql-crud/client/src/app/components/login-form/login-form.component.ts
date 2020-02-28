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
        if(res.message == 'the usuario is valid'){
          this.router.navigate(['/cuestionarios']);
        }

      }, err => {
        console.error(err)
      });
  }
}
/*
saveNewCuestionario(){
  delete this.cuestionario.idEncuesta;

  if (this.cuestionario.nombre.length > 0 && this.cuestionario.descripcion.length > 0 ){

    this.cuestionariosServices.saveCuestionario(this.cuestionario)
      .subscribe( res =>{
        console.log(res);
        this.router.navigate(['/cuestionarios']);
      }, err => {
        console.error(err)
      });
  }
}
*/
