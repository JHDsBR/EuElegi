import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'https://dadosabertos.camara.leg.br/api/v2/';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend retornou código ${error.status}, ` +
        `o corpo foi: ${error.error}`);
    }
    return throwError(
      'Algo de ruim aconteceu. Tente novamente depois.');
  }

  // getDeputados(): Observable<any>{
  //   return this.http.get(endpoint + 'deputados' ).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
  // }
}

