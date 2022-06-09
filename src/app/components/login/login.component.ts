import { Component } from "@angular/core";
import { UsuariosService } from "../usuarios/usuarios.service";



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public UsuariosService: UsuariosService) {
    this.email= "",
    this.password=""
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.UsuariosService.login(user).subscribe( data => {
      this.UsuariosService.setToken(data.token);
  });
}
}
