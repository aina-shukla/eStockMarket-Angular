import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  FindStockComponent } from './findstock.component';

describe('FindStockComponent', () => {
  let component: FindStockComponent;
  let fixture: ComponentFixture<FindStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
