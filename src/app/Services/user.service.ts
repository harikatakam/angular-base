import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private httpServie: HttpClient) {}

  createUser(user) {
    return this.httpServie.post("/api/User/Register", user);
  }
}
