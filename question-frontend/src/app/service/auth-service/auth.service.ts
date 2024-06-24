import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor() { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  // Método para simular login (pode ser substituído por lógica real)
  login() {
    this.isAuthenticatedSubject.next(true);
  }

  // Método para simular logout (pode ser substituído por lógica real)
  logout() {
    this.isAuthenticatedSubject.next(false);
  }

  // Observable para verificar o status de autenticação
  get isAuthenticated() {
    return this.isAuthenticatedSubject.asObservable();
  }
  
}




