import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyhistoryPage } from './company.page';

describe('CompanyhistoryPage', () => {
  let component: CompanyhistoryPage;
  let fixture: ComponentFixture<CompanyhistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
