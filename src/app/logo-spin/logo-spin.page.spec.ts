import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoSpinPage } from './logo-spin.page';

describe('LogoSpinPage', () => {
  let component: LogoSpinPage;
  let fixture: ComponentFixture<LogoSpinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
