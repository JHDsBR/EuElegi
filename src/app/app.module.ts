import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card'; // TESTE ----------
import { VotacoesListComponent } from './view/votacoes-list/votacoes-list.component';
import { ProposicoesListComponent } from './view/proposicoes-list/proposicoes-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    VotacoesListComponent,
    ProposicoesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
