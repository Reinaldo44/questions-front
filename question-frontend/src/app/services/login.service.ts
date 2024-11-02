import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { backendLogin, loginAdmin } from '../../requests/requests';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';

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
