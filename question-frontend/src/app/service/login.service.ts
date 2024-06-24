import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { backendLogin } from '../../requests/requests';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  readonly questionsUrl = backendLogin;

  constructor(private http: HttpClient) { }

  public save(user: user) : Observable<user>{


    return this.http.post<user>(this.questionsUrl, user);
    
  }
   
}
