import { Component, OnInit } from '@angular/core';
import { DeputadosService } from 'src/app/Shared/service/deputados.service';
import { Deputados } from 'src/app/Shared/Model/Deputados.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EuElegi-PAS';

  deputados!: Deputados[];

  constructor(
    public deputadosService: DeputadosService
  ){}

  ngOnInit(): void{
    this.getDeputados();
  }

  getDeputados(){
    this.deputadosService.getDeputados().subscribe(data => {
      this.deputados = data.dados;
      console.log(data.dados[0]);
    });
  }
}
