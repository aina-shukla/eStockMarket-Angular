import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CompanyService } from 'src/stockmarket/services/companyService/company.service';
import { CompanyEntity } from 'src/stockmarket/models/companyEntity';

@Component({
  selector: 'app-listallcompanies',
  templateUrl: './listallcompanies.component.html',
  styleUrls: ['./listallcompanies.component.scss']
})
export class ListAllCompaniesComponent implements OnInit {

  companies: CompanyEntity[]=[];
  // avlailableAirlines: AirlinesEntity[]=[];

  updateForm: FormGroup;

  constructor(private router: Router, private companyService: CompanyService) {

    this.updateForm = new FormGroup({
      "companyCode": new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ])
    });

  }

  findAllCompanies() {
    this.companyService.findAllCompanies().subscribe((res: any) => {
      console.log(res);
      this.companies = res;
    })
  }


   deleteCompany(companyCode:String){
    this.companyService.deleteCompany(companyCode).subscribe((res:any)=>{
      console.log(res);
      window.alert("Company is deleted..");
      this.companies = res;
      this.findAllCompanies();
  })
   }


  //  logout(){
  //   console.log("Logging out...");
  //   this.router.navigateByUrl("/home");  
  //  }

  ngOnInit(): void {
  }

}