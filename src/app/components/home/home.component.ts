import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  }
}
