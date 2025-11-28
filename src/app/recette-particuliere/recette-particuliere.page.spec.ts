import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetteParticulierePage } from './recette-particuliere.page';

describe('RecetteParticulierePage', () => {
  let component: RecetteParticulierePage;
  let fixture: ComponentFixture<RecetteParticulierePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteParticulierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
