import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public UsuariosService: UsuariosService) { }

  ngOnInit(): void {
    //al ejecutarse header, ejecuta esta función para comprobar si el usaruio está conectado
    this.checkLog();
  }



  checkLog() {
    const token = this.UsuariosService.getToken();
    //si token está vacío, significa que no está conectado, por lo que devolverá null. de lo contrario, devuelve el token.
    if (token == "") {
      return null;
    }
    return token;
  }

  getUserDelogged() {
    //desconecta al usuario llamando a logOut.
    this.UsuariosService.logOut();
  }

}
