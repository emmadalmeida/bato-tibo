import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageBateauParticulierPage } from './page-bateau-particulier.page';

describe('PageBateauParticulierPage', () => {
  let component: PageBateauParticulierPage;
  let fixture: ComponentFixture<PageBateauParticulierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBateauParticulierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
