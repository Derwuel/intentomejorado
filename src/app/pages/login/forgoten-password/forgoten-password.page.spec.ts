import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotenPasswordPage } from './forgoten-password.page';

describe('ForgotenPasswordPage', () => {
  let component: ForgotenPasswordPage;
  let fixture: ComponentFixture<ForgotenPasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgotenPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
