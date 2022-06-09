import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.css']
})
export class InfouserComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit(): void {
    //Creamos user para que no explote mientras esperamos al fetch y llamamos a la función
    this.user = []
    this.getUser();

  }

  getUser() {
    //Coge de la ruta el valor ID que le hemos pasado en rutas.
    this.route.params.subscribe(params => {
      const userID = params['id'];
      const url = 'https://reqres.in/api/users/' + userID;
      //fetch a url
      this.http.get(url).subscribe(data => {
        this.user = data;
        this.user = this.user.data;
      })

    })



  }
}
