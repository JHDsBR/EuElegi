import { Component, OnInit } from '@angular/core';
import { ProposicoesService } from 'src/app/Shared/service/proposicoes.service';
import { Proposicoes } from 'src/app/Shared/Model/Proposicoes.model';

@Component({
  selector: 'app-proposicoes-list',
  templateUrl: './proposicoes-list.component.html',
  styleUrls: ['./proposicoes-list.component.css']
})
export class ProposicoesListComponent implements OnInit {

  proposicoes!: Proposicoes[];

  constructor(
    public proposicoesService: ProposicoesService
  ){}

  ngOnInit(): void{
    this.getProposicoes();
  }

  getProposicoes(){
    this.proposicoesService.getProposicoes().subscribe(data => {
      this.proposicoes = data.dados;
      console.log(data.dados);
    });
  }
}
