//Importar los modulos del router de Angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Route} from "@angular/router";
import { ErrorComponent } from "./components/error/error.component";
import { HomeComponent } from "./components/home/home.component";
import { InfouserComponent } from "./components/infouser/infouser.component";


//Ahora los componentes


import { LoginComponent } from "./components/login/login.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";

//Array de rutas

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'informacion-usuario/:id', component: InfouserComponent},
  {path: 'usuarios', component: UsuariosComponent},
  //La siguiente tiene que ser la última sí o sí, si no, las que estén debajo serán inaccesibles.
  {path: '**', component: ErrorComponent}
];

//Expotar modulo rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
