
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient} from '@angular/common/http';


import { question } from '../model/question';
import {backendAll, backendListAnswer} from '../../requests/requests';
import { respostaMarcada } from '../model/respostaMarcada';
import { feedback } from '../model/feedback';

@Injectable({
  providedIn: 'root'
})

export class ListServiceService {

  readonly questionsUrl = backendAll;
  readonly listAnswer = backendListAnswer;

  
  
  constructor(private http: HttpClient) { 

  }

  public findAll() : Observable<question[]> {
    return this.http.get<question[]>(this.questionsUrl.concat('questions'));
  }


  public save(question: any) : Observable<question>{
    return this.http.post<question>(this.questionsUrl, question);
  }

  findById(id: number): Observable<question> {
     
    const url = `${this.questionsUrl}/${id}`;

    return this.http.get<question>(url).pipe(
      map((obj) => obj )
    );
  }

  
  public saveAnswer(resposta: respostaMarcada) : Observable<any>{

    const url = `${this.listAnswer}/${resposta.idQuestion}/respostas/${resposta.idAnswer}`;

    return this.http.post<any>(url, null);
    
  }

  public resultado(): Observable<feedback>{

    return this.http.get<feedback>(this.listAnswer);

  }



  
}
