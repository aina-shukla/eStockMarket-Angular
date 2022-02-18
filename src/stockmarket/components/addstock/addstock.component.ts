import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StockService } from 'src/stockmarket/services/stockService/stock.service';
import { CompanyEntity } from 'src/stockmarket/models/companyEntity';
import { StockEntity } from 'src/stockmarket/models/stockEntity';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.scss']
})
export class AddStockComponent {

  adminForm: FormGroup;

  constructor(private stockService: StockService, private router: Router) {
    this.adminForm = new FormGroup({
      "stockId": new FormControl('', [Validators.required]),
      "companyCode": new FormControl('', [Validators.required]),
      "stockPrice": new FormControl('', [Validators.required]),
      "stockExchange": new FormControl('', [Validators.required]),
      "startDate": new FormControl('', [Validators.required]),
      "endDate": new FormControl('', [Validators.required])
    });
  }


  onSubmit() {
    if (this.adminForm.valid) {
      let companyCode = this.adminForm.value.companyCode;
      let stock = new StockEntity(this.adminForm.value.stockId, this.adminForm.value.companyCode, this.adminForm.value.stockPrice, this.adminForm.value.stockExchange,
        this.adminForm.value.startDate, this.adminForm.value.endDate);
      this.stockService.addStockPrices(companyCode, stock).subscribe((res: any) => {
        console.log(res);
        window.alert("Stock price added..");
        this.router.navigateByUrl("/home");
      })
    }
    else {
      console.log("Invalid data....");
    }
  }


}