import { Injectable } from '@angular/core';

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

}
