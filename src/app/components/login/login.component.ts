import { Component } from "@angular/core";
import { UsuariosService } from "../usuarios/usuarios.service";
import { Router } from "@angular/router";



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public UsuariosService: UsuariosService, public router: Router) {
    this.email = "",
      this.password = ""
  }

  login() {
    const user = { email: this.email, password: this.password };
    //envia a login los datos de user, pone la cookie del token y te devuelve a home una vez conectado. si los datos no son correctos, salta error.
    this.UsuariosService.login(user).subscribe(data => {
      this.UsuariosService.setToken(data.token);
      this.router.navigateByUrl('/home');
    },
      error => {
        //si hay un error:
        console.warn("Hay un fallo en la API");
        console.warn(error);
      })


}

}
