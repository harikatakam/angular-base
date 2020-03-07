import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as jwt_decode from "jwt-decode";

@Injectable({ providedIn: "root" })
export class UserService {
  loggedInUser;
  constructor(private httpServie: HttpClient) {}

  createUser(user) {
    return this.httpServie.post("/api/User/CreateUser", user);
  }

  updateUSer(user) {
    return this.httpServie.post("/api/User/UpdateUser", user);
  }

  login(userName, password) {
    return this.httpServie.post("/api/User/Login", {
      userName,
      password
    });
  }

  logout() {
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
    return this.httpServie.get(
      "/api/User/GetAllUsersCreatedBy?userID=" + this.loggedInUser.Id
    );
  }

  getUserRoles() {
    return this.httpServie.get("/api/User/GetMasterData");
  }

  changePassword(UserData: any) {
    return this.httpServie.post("/api/User/ChangePassword", UserData);
  }

  uploadDocuments(fileData: any) {
    return this.httpServie.post("/api/User/UploadKYCDocument", fileData);
  }

  getDocument(name) {
    return this.httpServie.get(
      "/api/User/GetUserDocuments?userId=" +
        this.loggedInUser.Id +
        "&documentName=" +
        name
    );
  }
}
