import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CustionarioFormComponent } from './components/custionario-form/custionario-form.component';
import { CustionarioListComponent } from './components/custionario-list/custionario-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CustionarioFormComponent,
    CustionarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
