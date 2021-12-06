import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Deputados } from '../Shared/Model/Deputados.model';
import { DeputadosService } from '../Shared/service/deputados.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deputado',
  templateUrl: './deputado.component.html',
  styleUrls: ['./deputado.component.css']
})
export class DeputadoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog,
    public deputadosService: DeputadosService
  ) {}

  deputados!: Deputados[];
  

  ngOnInit() {
    this._router.navigate(['deputado-component'])
  }

  
}

