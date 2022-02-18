import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  ListAllCompaniesComponent } from './listallcompanies.component';

describe('ListAllCompaniesComponent', () => {
  let component: ListAllCompaniesComponent;
  let fixture: ComponentFixture<ListAllCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
