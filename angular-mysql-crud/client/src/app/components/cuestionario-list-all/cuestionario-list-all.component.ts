import {Component, HostBinding, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { CuestionarioService } from '../../services/Cuestionario.Service';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { Cuestionario } from 'src/app/models';
@Component({
  selector: 'app-cuestionario-list-all',
  templateUrl: './cuestionario-list-all.component.html',
  styleUrls: ['./cuestionario-list-all.component.css']
})
export class CuestionarioListAllComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
  previous: any = [];
  searchText: string;

  cuestionarios: any = [];

  @HostListener('input') onInput() { this.searchItems(); }

  constructor(private cuestionarioService: CuestionarioService, private router: Router, private cdRef: ChangeDetectorRef) {
    localStorage.setItem('rout', router.url) ;
  }

  ngOnInit(): void {
    this.getCuestionarios();
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous); this.cuestionarios = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.cuestionarios = this.mdbTable.searchLocalDataByMultipleFields(
        this.searchText, ['nombre', 'descripcion']
      );
      this.mdbTable.setDataSource(prev);

    }
  }

  setTable() {
    this.mdbTable.setDataSource(this.cuestionarios);
    this.cuestionarios = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();

    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  getCuestionarios() {
    this.cuestionarioService.listarCuestionarios(null).subscribe(
      cuestionarios => {
        this.cuestionarios = cuestionarios.map((item: any) => new Cuestionario(item));
        this.setTable();
      },
      err => {
        console.log(err);

      }
    );
  }

  contestarCuestionario(idCuestionario: number) {
    this.router.navigate(['/cuestionarios/contestar/', idCuestionario]);
  }
}
