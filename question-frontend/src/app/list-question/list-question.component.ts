import { Component, OnInit } from '@angular/core';
import { MatRadioModule} from '@angular/material/radio';
import { ListServiceService } from '../service/list-service.service';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { question } from '../model/question';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { respostaMarcada } from '../model/respostaMarcada';


@Component({
  selector: 'app-list-question',
  standalone: true,
  imports: [MatRadioModule, MatCardModule, FormsModule, NgFor, NgClass, ReactiveFormsModule, NgIf, MatButtonModule],
  templateUrl: './list-question.component.html',
  styleUrl: './list-question.component.css'
})
export class ListQuestionComponent implements OnInit{
  
  selected = new FormControl('');// Aqui está o controle do grupo de 
  //questions: question[] = [];
  question!: question;
  id: any = 0;
  selectedAnswer: any;
  resposta: respostaMarcada = {
    idQuestion: '',
    idAnswer: ''
};

  option: any;


    constructor(private listService: ListServiceService,private router: Router){
  
  }
  ngOnInit(): void {

    this.randomId();
    this.getById(this.id);
    

  }
    // Get all questions
    //getQuestions(){
    //  this.listService.findAll().subscribe(data => {
    //    this.questions = data;
    // }

    getById(id: number){

        this.listService
              .findById(id).subscribe (data => {  this.question = data });
        
    }

    onSubmit(): void{

      this.option = this.selected.value 

      if(this.option){

        this.resposta.idAnswer = this.option;

      } 

      this.resposta.idQuestion = this.question.id;

      this.listService.saveAnswer(this.resposta).subscribe({
        
        next: () => {

          this.resultado();
          this.randomId();
          this.getById(this.id);
      }       
      ,
        error: (erro) => {
        alert("Usuário ou Senha inválido(s)!");
        console.log(erro);
      }
    }
  ); 

    }    

    randomId(){

       this.id++;
      
    }

    resultado():void{

      if(this.id >= 10){

        this.router.navigateByUrl('feedback');

      }

    }



    
  

  }