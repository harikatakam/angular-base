import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private httpServie: HttpClient) {}

  createUser(user) {
    return this.httpServie.post("/api/User/CreateUser", user);
  }

  login(userName, password) {
    return this.httpServie.post("/api/User/Login", {
      userName,
      password
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("UserToken");
}

  storeUserTokenandDetails(userdetails) {
    localStorage.setItem("UserToken", userdetails.token);
  }

  getAllUsersCreatedByLoggedInUser() {
    return this.httpServie.get("/api/User/GetAllUsersCreatedBy?userID= 1");
  }

  getUserRoles() {
    return this.httpServie.get("/api/User/GetRoles");
  }
}
