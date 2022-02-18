import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockEntity } from '../../models/stockEntity';

@Injectable({
  providedIn: 'root'
})

export class StockService {

  private host: string = "http://localhost:8082";
  constructor(private httpClient: HttpClient) { }

  addStockPrices(companyCode: String, stockEntity : StockEntity){
    return this.httpClient.post(this.host+"/add/"+companyCode, stockEntity);
  }

}
