import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/Shared/Model/response.model';

@Injectable({
  providedIn: 'root'
})
export class VotacoesService {

  apiUrl = 'https://dadosabertos.camara.leg.br/api/v2/votacoes';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getVotacoes(): Observable<Response>{
    return this.httpClient.get<Response>(this.apiUrl);
  }

}
