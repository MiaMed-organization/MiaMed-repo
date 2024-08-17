import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/users'; // db.json dosyasına erişim yolu

  constructor(private http: HttpClient) { }

  // Kullanıcı bilgilerini güncelle
  updateUserPassword(id: string, newPassword: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { password: newPassword });
  }

  // Kullanıcı bilgilerini al
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
