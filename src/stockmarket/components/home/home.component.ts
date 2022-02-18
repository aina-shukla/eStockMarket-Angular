import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyEntity } from 'src/stockmarket/models/companyEntity';
import { CompanyService } from 'src/stockmarket/services/companyService/company.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    userForm: FormGroup;
    company: CompanyEntity[] = [];

    constructor(private router: Router, private companyService: CompanyService) {
        this.userForm = new FormGroup({
            "companyCode": new FormControl("", [
                Validators.required,
                Validators.minLength(3)
            ])
        });
    }

    onSubmit() {
        console.log(this.userForm)
        console.log(this.userForm.value)
        let companyCode = this.userForm.value.companyCode;
        this.findACompany(companyCode);
    }

    findACompany(companyCode: String) {
        this.companyService.findCompany(companyCode).subscribe((res: any) => {
            console.log(res);
            this.company = res;

            
        })

    }

}
