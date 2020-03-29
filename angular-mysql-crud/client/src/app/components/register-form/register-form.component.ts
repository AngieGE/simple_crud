import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/index';
import { UsuarioService, ManagerService } from '../../services/index';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any ;

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

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    this.userExists = false;
    this.wrongP = false;
    this.wrongData = false;
  }

  registrarUsuario() {
    console.log(this.usuario.localFechaNacimiento);
    if (this.usuario.nombre == null || this.usuario.apellido == null || this.usuario.contrasena == null ||
      this.usuario.contrasena2 == null || this.usuario.usuario == null || this.usuario.localFechaNacimiento == null ||
      this.usuario.genero == null || this.usuario.nombre === '' || this.usuario.apellido === '' || this.usuario.contrasena === '' ||
      this.usuario.contrasena2 === '' || this.usuario.usuario === '' || this.usuario.localFechaNacimiento === '') {
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
      this.usuario.fechaNacimiento = new Date(this.usuario.localFechaNacimiento);
      this.usuarioService.crearUsuario(this.usuario)
        .subscribe(res => {
          console.log(res);
          if (!res.saved) {
            this.userExists = true;
          } else {
            $('#myModal').show();
            this.userExists = false;
          }

        });
    }


  }

  logIn() {
    this.router.navigate(['/index']);
  }
}
