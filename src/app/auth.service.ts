import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  signUp(user: any) {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(user: any) {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
