import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { DisciplineComponent } from './discipline/discipline/discipline.component';
import { StatusComponent } from './status/status.component';
import { AchivedComponent } from './achived/achived.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisciplineComponent,
    StatusComponent,
    AchivedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
