import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBook(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  updateBook(book: any): Observable<any> {
    const url = `${this.apiUrl}/${book.id}`;
    return this.http.put<any>(url, book);
  }

  deleteBook(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
