import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../../services/cuestionarios.service';
@Component({
  selector: 'app-custionario-list',
  templateUrl: './custionario-list.component.html',
  styleUrls: ['./custionario-list.component.css']
})
export class CustionarioListComponent implements OnInit {

  cuestionarios: any = [];

  constructor(private cuestionariosService: CuestionariosService ) { }

  ngOnInit(): void {
    this.cuestionariosService.getCuestionarios().subscribe(
      res => {
        this.cuestionarios = res;
        console.log(this.cuestionarios);
      },
      err => {
        console.log(err);
      }
    );
  }

}
