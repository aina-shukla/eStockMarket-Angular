import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CompanyService } from 'src/stockmarket/services/companyService/company.service';
import { CompanyEntity } from 'src/stockmarket/models/companyEntity';
// import { AirlinesEntity } from 'src/flightPage/models/airlinesEntity';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.scss']
})
export class AddCompanyComponent {

  adminForm: FormGroup;

  constructor(private companyService: CompanyService, private router: Router) {
    this.adminForm = new FormGroup({
      "companyCode": new FormControl('', [Validators.required, Validators.minLength(3)]),
      "companyName": new FormControl('', [Validators.required]),
      "companyCEO": new FormControl('', [Validators.required]),
      "companyTurnover": new FormControl('', [Validators.required]),
      "companyWebsite": new FormControl('', [Validators.required]),
      "stockExchange": new FormControl('', [Validators.required])
    });
  }


  onSubmit() {
    if (this.adminForm.valid) {
      let company = new CompanyEntity(this.adminForm.value.companyCode, this.adminForm.value.companyName, this.adminForm.value.companyCEO, this.adminForm.value.companyTurnover,
        this.adminForm.value.companyWebsite, this.adminForm.value.stockExchange);
      this.companyService.registerCompany(company).subscribe((res: any) => {
        console.log(res);
        window.alert("Company registered");
        this.router.navigateByUrl("/listallcompanies");
      })
    }
    else {
      console.log("Invalid data....");
    }
  }


}