import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { CuestionarioListAllComponent } from './components/cuestionario-list-all/cuestionario-list-all.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CustionarioFormComponent } from './components/custionario-form/custionario-form.component';
import { CustionarioListComponent } from './components/custionario-list/custionario-list.component';

// SERVICES
import {DatePipe} from '@angular/common';
import { AplicacionService } from './services/Aplicacion.Service';
import { CuestionarioService } from './services/cuestionario.service';
import { ManagerService } from './services/Manager.Service';
import { OpcionService } from './services/Opcion.Service';
import { PreguntaService } from './services/Pregunta.Service';
import { RespuestaAbiertaService } from './services/RespuestaAbierta.Service';
import { RespuestaMultipleService } from './services/RespuestaMultiple.Service';
import { UsuarioService } from './services/Usuario.Service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CustionarioFormComponent,
    CustionarioListComponent,
    CuestionarioListAllComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CuestionarioListAllComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DatePipe,
    AplicacionService,
    CuestionarioService,
    ManagerService,
    OpcionService,
    PreguntaService,
    RespuestaAbiertaService,
    RespuestaMultipleService,
    UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
