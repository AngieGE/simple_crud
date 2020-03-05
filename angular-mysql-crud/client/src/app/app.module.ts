import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CustionarioFormComponent } from './components/custionario-form/custionario-form.component';
import { CustionarioListComponent } from './components/custionario-list/custionario-list.component';
import { CuestionariosService } from './services/cuestionarios.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CustionarioFormComponent,
    CustionarioListComponent,
    LoginFormComponent,
    RegisterFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CuestionariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
