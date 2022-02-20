import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StockEntity } from 'src/stockmarket/models/stockEntity';
import { StockService } from 'src/stockmarket/services/stockService/stock.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-findstock',
  templateUrl: './findstock.component.html',
  styleUrls: ['./findstock.component.scss']
})
export class FindStockComponent implements OnInit {

  stock: StockEntity[]=[];
  message:string = "";
  adminForm: FormGroup;

  constructor(private router: Router, private stockService: StockService) {

    this.adminForm = new FormGroup({
      "companyCode": new FormControl("", [Validators.required,Validators.minLength(3)]),
      "startDate": new FormControl("", [Validators.required]),
      "endDate": new FormControl("", [Validators.required])
    });

  }

  onSubmit() {
    console.log(this.adminForm)
    console.log(this.adminForm.value)
    let companyCode = this.adminForm.value.companyCode;
    let startDate = this.adminForm.value.startDate;
    let endDate =  this.adminForm.value.endDate;
    this.findStock(companyCode, startDate, endDate);
}

   findStock(companyCode:String, startDate: String, endDate: String){
    this.stockService.findStock(companyCode, startDate, endDate).subscribe((res:any)=>{
      console.log(res);
      this.stock = res;  
      //this.message = "";   //if everything works fine set message to null
    }, this.handleError )
   }

   handleError = (err:any)=>{
    console.log(err);
    if(err instanceof HttpErrorResponse)
    console.log("This is error HttpErrorRespones type")
  
    this.message = err.message;
   }

  ngOnInit(): void {
  }

}