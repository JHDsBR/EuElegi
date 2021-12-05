import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposicoesListComponent } from './proposicoes-list.component';

describe('ProposicoesListComponent', () => {
  let component: ProposicoesListComponent;
  let fixture: ComponentFixture<ProposicoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposicoesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposicoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
