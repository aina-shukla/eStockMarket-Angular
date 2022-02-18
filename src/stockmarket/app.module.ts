import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { AddCompanyComponent } from "./components/addcompany/addcompany.component";
import { ListAllCompaniesComponent } from "./components/listallcompanies/listallcompanies.component";
import { AddStockComponent } from "./components/addstock/addstock.component";

const routes:Routes = [
    {path: "home", component: HomeComponent },
    {path: "addcompany", component: AddCompanyComponent},
    {path: "listallcompanies", component: ListAllCompaniesComponent},
    {path: "addstock", component: AddStockComponent},
    {path: "**", redirectTo: "home" }
];

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, AddCompanyComponent, ListAllCompaniesComponent, AddStockComponent],
    imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes)],
    bootstrap: [AppComponent]
})
export class AppModule { }