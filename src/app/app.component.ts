import { Component, OnInit } from '@angular/core';
import { DeputadosService } from 'src/app/Shared/service/deputados.service';
import { Deputados } from 'src/app/Shared/Model/Deputados.model';
import {Injectable, NgModule} from '@angular/core';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {Subject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeputadoComponent } from './deputado/deputado.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
},
)
export class AppComponent implements OnInit{
  title = 'EuElegi';

  deputados!: Deputados[];

  constructor(
    public deputadosService: DeputadosService,
    private _router: Router,
    public dialog: MatDialog
  ){}

  ngOnInit(): void{
    this.getDeputados();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeputadoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    }

  getDeputados(){
    this.deputadosService.getDeputados().subscribe(data => {
      this.deputados = data.dados;
      console.log(data.dados[0]);
    });
  }

  selectDeputados(){
    this.deputadosService.selectDeputados();
  }
  
  
};

