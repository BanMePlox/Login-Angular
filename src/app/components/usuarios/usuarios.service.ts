import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  email: string;
  id: Number;
  first_name: String;
  last_name: String;
  avatar: String;
  constructor(private http: HttpClient, private cookies: CookieService) {
    //construimos las variables de user. el valor dado es irrelevante porque se sustituirán por los de la api
    this.email = "",
    this.id =  1,
    this.first_name = "",
    this.last_name = "",
    this.avatar = ""
   }

  ngOnInit(): void {

  }

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
  //Almacenamos en las cookies el token que se genera al conectarse
  setToken(token: string) {
    this.cookies.set("token", token);

  }

  getToken() {
    //get al token de las cookies
    return this.cookies.get("token");
  }
  getUser() {
    return this.http.get("https://reqres.in/api/users/"+this.id);
  }


  logOut() {
    //Destruimos el token de las cookies por lo que ya no estamos conectados
    const token = this.getToken();
    this.cookies.delete("token");
  }
}
