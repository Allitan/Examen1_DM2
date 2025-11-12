import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Examen5Page } from './examen5.page';

describe('Examen5Page', () => {
  let component: Examen5Page;
  let fixture: ComponentFixture<Examen5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Examen5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
