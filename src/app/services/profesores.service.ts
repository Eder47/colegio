import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class educacion{

    endpoint: string;

    constructor(private httpClient: HttpClient) {
        this.endpoint = environment.resources.host;
      }

      public consultarProfesores(): Observable<any> {
        return this.httpClient.get(this.endpoint + `/getProfesores`,);
      }

      public listarIncripciones(id: number):Observable<any> {
        return this.httpClient.get(this.endpoint + `/getInfo/${id}`);
      }

}
