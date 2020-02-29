import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import * as jwt_decode from "jwt-decode";

@Injectable({ providedIn: "root" })
export class UserService {
  loggedInUser;
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
    this.setLoggedinUser(userdetails.token);

  }

  setLoggedinUser(token) {
    const tokenDecoded = jwt_decode(token);
    this.loggedInUser = JSON.parse(tokenDecoded.user);
  }

  getAllUsersCreatedByLoggedInUser() {
    return this.httpServie.get("/api/User/GetAllUsersCreatedBy?userID=" +  this.loggedInUser.Id);
  }

  getUserRoles() {
    return this.httpServie.get("/api/User/GetRoles");
  }
}
