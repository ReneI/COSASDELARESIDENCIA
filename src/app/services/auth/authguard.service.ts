import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
export class AuthGuardService {
  constructor(public http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  iniciosesion() {}
}
