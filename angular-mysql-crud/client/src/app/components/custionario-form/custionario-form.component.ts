import { Component, OnInit, HostBinding } from '@angular/core';
import { Cuestionario } from '../../models/Cuestionario';
import { CuestionariosService } from '../../services/cuestionarios.service'
import {provideRoutes} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-custionario-form',
  templateUrl: './custionario-form.component.html',
  styleUrls: ['./custionario-form.component.css']
})
export class CustionarioFormComponent implements OnInit {

  //@HostBinding('class') classes = 'row';
  cuestionario: Cuestionario = {
    id:0,
    title: '',
    desciption: '',
    created_at: new Date()
  }

  constructor(private cuestionariosServices: CuestionariosService, private router:Router) { }

  ngOnInit(): void {}

  saveNewCuestionario(){
    delete this.cuestionario.created_at;
    delete this.cuestionario.id;
    if (this.cuestionario.title.length > 0 && this.cuestionario.desciption.length > 0 ){

      this.cuestionariosServices.saveCuestionario(this.cuestionario)
        .subscribe( res =>{
          console.log(res);
          this.router.navigate(['/cuestionarios']);
        }, err => {
          console.error(err)
        });

    }
  }

}
