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
    this.UsuariosService.login(user).subscribe(data => {
      this.UsuariosService.setToken(data.token);
      this.router.navigateByUrl('/home');
    },
      error => {
        console.log("Hay un fallo en la API");
        console.log(error);
      })


}

}
