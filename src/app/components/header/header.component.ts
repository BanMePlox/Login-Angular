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
    this.getUserLogged();
    this.checkLog();
  }

  getUserLogged() {
    this.UsuariosService.getUser().subscribe(user => {
      return user;
    });

  }

  checkLog() {
    const token = this.UsuariosService.getToken();
    if (token == "") {
      return null;
    }
    return token;
  }

  getUserDelogged() {
    this.UsuariosService.logOut();
    console.log('Delogeado');
  }

}
