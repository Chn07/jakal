import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactusPage } from './contact.page';

describe('ContactusPage', () => {
  let component: ContactusPage;
  let fixture: ComponentFixture<ContactusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
