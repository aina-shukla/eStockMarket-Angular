import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyEntity } from '../../models/companyEntity';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  private host: string = "http://localhost:8081";
  private hostUrl: string = "http://localhost:8081/admin/login";
  constructor(private httpClient: HttpClient) { }

  findSingleCompany(companyCode: String) {
    return this.httpClient.get(this.host + "/info/" + companyCode);
  }

  findAllCompanies(){
    return this.httpClient.get(this.host+"/getall");
  }

  deleteCompany(companyCode: String) {
    return this.httpClient.delete(this.host + "/delete/" + companyCode);
  }

  registerCompany(companyEntity : CompanyEntity){
    return this.httpClient.post(this.host+"/register", companyEntity);
  }

}
