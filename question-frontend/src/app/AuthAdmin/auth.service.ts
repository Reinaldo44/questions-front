import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Admin } from '../model/Admin';
import { loginAdmin } from '../../requests/requests';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly loginAdmin = loginAdmin;
  private tokenKey = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(admin: Admin) {
    
    return this.http.post<{ token: string }>(this.loginAdmin, admin)
      .subscribe({
        next: (response) => {
          localStorage.setItem(this.tokenKey, response.token);
          this.router.navigate(['/create']);
        },

        error: (err) => {
          alert('Erro ao fazer o login');
          console.error('Erro ao fazer login:', err);
          // Aqui você pode adicionar qualquer lógica adicional de tratamento de erro
        }
      });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
