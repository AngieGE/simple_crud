import {Component, HostBinding, OnInit} from '@angular/core';
import { CuestionariosService } from '../../services/cuestionarios.service';
@Component({
  selector: 'app-custionario-list',
  templateUrl: './custionario-list.component.html',
  styleUrls: ['./custionario-list.component.css']
})
export class CustionarioListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  cuestionarios: any = [];

  constructor(private cuestionariosService: CuestionariosService ) { }

  ngOnInit(): void {
    this.getCuestionarios();
  }

  getCuestionarios(){
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

  deleteCuestionario(id: string){
    console.log("delete game "+id);
    this.cuestionariosService.deleteCuestionario(id).subscribe(
      res=> {
          console.log(res);
          this.getCuestionarios();
      },
      err =>{
        console.log(err);
      }
    )
  }

}
