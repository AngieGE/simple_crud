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

  constructor(private usuarioService: UsuarioService, private  router: Router, private manager: ManagerService) { }

  ngOnInit(): void {
  }

}
