import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  us: JSON;
  editando: boolean;
  nacimiento: Date;
  constructor(public datepipe: DatePipe){
    this.editando = false;
  }

  ngOnInit(): void {
    this.us = JSON.parse(localStorage.getItem('usuario'));
    //ESTO NO ME ESTA DANDO LA FECHA CORRECTA AIUDA!!!
    this.nacimiento = new Date (this.datepipe.transform(this.us['fechaNacimiento'], 'yyyy/MM/dd'));
    console.log('a   '+this.nacimiento);
  }

  editar( editando: boolean) {
    this.editando = editando;
  }

  saveChanges(){
    this.editar(false);
  }

}
