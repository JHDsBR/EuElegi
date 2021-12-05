import { Component, OnInit } from '@angular/core';
import { VotacoesService } from 'src/app/Shared/service/votacoes.service';
import { Votacoes } from 'src/app/Shared/Model/Votacoes.model';

@Component({
  selector: 'app-votacoes-list',
  templateUrl: './votacoes-list.component.html',
  styleUrls: ['./votacoes-list.component.css']
})
export class VotacoesListComponent implements OnInit {

  votacoes!: Votacoes[];

  constructor(
    public votacoesService: VotacoesService
  ){}

  ngOnInit(): void{
    this.getVotacoes();
  }

  getVotacoes(){
    this.votacoesService.getVotacoes().subscribe(data => {
      this.votacoes = data.dados;
      console.log(data.dados);
    });
  }
}
