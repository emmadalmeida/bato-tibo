import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageRestaurantParticulierPage } from './page-restaurant-particulier.page';

describe('PageRestaurantParticulierPage', () => {
  let component: PageRestaurantParticulierPage;
  let fixture: ComponentFixture<PageRestaurantParticulierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRestaurantParticulierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
