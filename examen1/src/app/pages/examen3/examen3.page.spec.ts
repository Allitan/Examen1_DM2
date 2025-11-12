import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Examen3Page } from './examen3.page';

describe('Examen3Page', () => {
  let component: Examen3Page;
  let fixture: ComponentFixture<Examen3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Examen3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
