import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotacoesListComponent } from './votacoes-list.component';

describe('VotacoesListComponent', () => {
  let component: VotacoesListComponent;
  let fixture: ComponentFixture<VotacoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotacoesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotacoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
