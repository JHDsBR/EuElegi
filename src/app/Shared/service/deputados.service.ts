import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/Shared/Model/response.model';

@Injectable({
  providedIn: 'root'
})
export class DeputadosService {

  apiUrl = 'https://dadosabertos.camara.leg.br/api/v2/deputados';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getDeputados(): Observable<Response>{
    return this.httpClient.get<Response>(this.apiUrl);
  }

  public selectDeputados(): Observable<Response>{
    return this.httpClient.get<Response>(`${this.apiUrl}/{id}`);
    }

}
