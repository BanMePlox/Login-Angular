import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

//Necesitamos importar los core de Angular, el routing para hacerlo funcionar, formsmodule para el login, httpclient para los fetch de
//la api y cookieservice para guardar el token

//Los import de abajo son los componentes.
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InfouserComponent } from './components/infouser/infouser.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    InfouserComponent,
    ErrorComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],

})
export class AppModule { }
