import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CompanyEntity } from 'src/stockmarket/models/companyEntity';
import { CompanyService } from 'src/stockmarket/services/companyService/company.service';
 
@Component({
  selector: 'app-findcompany',
  templateUrl: './findcompany.component.html',
  styleUrls: ['./findcompany.component.scss']
})

export class FindCompanyComponent implements OnInit {

  company: CompanyEntity[]=[];
  adminForm: FormGroup;
  result:any =[];

  constructor(private router: Router, private companyService: CompanyService) {

    this.adminForm = new FormGroup({
      "companyCode": new FormControl("", [Validators.required,Validators.minLength(3)])
    });

  }

onSubmit() {
    console.log(this.adminForm)
    console.log(this.adminForm.value)
   // let companyCode = this.adminForm.value.companyCode;
    this.findACompany(this.adminForm.value.companyCode);
}

findACompany(companyCode: String) {
  this.companyService.findSingleCompany(companyCode).subscribe((res: any) => {
      console.log(res);
      this.company = res;
      this.result = res;
    })

  }

  ngOnInit(): void {
  }

}