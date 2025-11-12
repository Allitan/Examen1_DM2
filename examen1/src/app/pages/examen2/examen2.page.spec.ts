import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Examen2Page } from './examen2.page';

describe('Examen2Page', () => {
  let component: Examen2Page;
  let fixture: ComponentFixture<Examen2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Examen2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
