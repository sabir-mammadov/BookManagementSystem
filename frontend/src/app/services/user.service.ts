import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    const url = `${this.apiUrl}/signup`;
    return this.http.post<any>(url, user);
  }

  login(user: any): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<any>(url, user);
  }
}
