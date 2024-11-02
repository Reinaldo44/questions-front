import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken(); // Obtém o token do serviço de autenticação
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Adiciona o token ao cabeçalho da requisição
        }
      });
    }
    return next.handle(request); // Continua com a requisição
  }
}
