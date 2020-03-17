import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuestionario } from 'src/app/models';
import { CuestionarioService, PreguntaService, OpcionService } from 'src/app/services';

@Component({
  selector: 'app-cuestionario-results',
  templateUrl: './cuestionario-results.component.html',
  styleUrls: ['./cuestionario-results.component.css']
})
export class CuestionarioResultsComponent implements OnInit {
  cuestionario: Cuestionario;

  public chartType = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor(
    private cuestionariosServices: CuestionarioService, private preguntaService: PreguntaService,
    private opcionService: OpcionService, private router: Router, private activatedRoute: ActivatedRoute
  ) {
    this.cuestionario = new Cuestionario();
    this.cuestionario.idCuestionario = parseInt(this.activatedRoute.snapshot.paramMap.get('idCuestionario'), 10);
  }

  ngOnInit(): void {
  }

}
