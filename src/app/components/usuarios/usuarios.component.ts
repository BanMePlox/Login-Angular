import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
users: any;
  constructor(private http: HttpClient) {

    }


  ngOnInit(): void {
    this.users = [];
    this.getUsers();

  }

  public getUsers() {
    this.http.get('https://reqres.in/api/users').subscribe(data => {
      //recoge la información de la API de todos los usuarios y los almacena en this.users
      this.users = data;
      this.users = this.users.data;

    });

  }

}
