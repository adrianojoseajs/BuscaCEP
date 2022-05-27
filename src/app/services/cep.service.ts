import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient : HttpClient) { }

  private api : string = "https://viacep.com.br/ws/" ;
  private tipoRetorno : string = "/json/unicode/" ;

  public getCEP(cep : string){

    console.log(`${this.api}${cep}${this.tipoRetorno}`);
    return this.httpClient.get(`${this.api}${cep}${this.tipoRetorno}`);

  }
}
