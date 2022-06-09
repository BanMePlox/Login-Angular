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
    this.email = "",
    this.id =  0,
    this.first_name = "",
    this.last_name = "",
    this.avatar = ""
   }

  ngOnInit(): void {

  }

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }

  logOut() {
    const token = this.getToken();
    this.cookies.delete("token");
  }

  getRegisteredUsers() {
    return this.http.get("https://reqres.in/api/users");
  }
}
