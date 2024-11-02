import { Component, OnInit } from '@angular/core';
import { MatRadioModule} from '@angular/material/radio';
import { ListServiceService } from '../services/list-service.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
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

  formGroup!: FormGroup;
  question!: question;
  id: any = 0;
  selectedAnswer: any;
  resposta: respostaMarcada = {
    idQuestion: '',
    idAnswer: ''
};

excludedNumbers: number[] = [];
randomNumber: number = 0;

  option: any;

    constructor(private listService: ListServiceService,private router: Router){
    
    }
  ngOnInit(): void {
    
      
     this.formGroup = new FormGroup({
      selected: new FormControl('', [Validators.required])
     });
    this.generateNewRandom();
    this.getById(this.id);
    

  }

    getById(id: number){

        this.listService
              .findById(id).subscribe(data => { 
                
                this.question = data;
              
              });
        
    }
    selectedValueUser(): void{

      this.option = this.formGroup.value.selected; 
      this.resposta.idAnswer = this.option;        
      this.resposta.idQuestion = this.question.id;
    }

    
    onSubmit(): void{

    
      this.selectedValueUser();

      this.listService.saveAnswer(this.resposta).subscribe({
        
        next: () => {

          this.resultado();
          this.generateNewRandom();
          this.getById(this.id);
          this.formGroup.get('selected')?.reset();
          
      }       
      ,
        error: (erro) => {

        console.log(erro);

      }
    }
  ); 
}

     
    generateNewRandom() {

      let newRandomNumber: number;

      do {

        newRandomNumber = Math.floor(Math.random() * 11) + 1;

      } 
      while (this.excludedNumbers.includes(newRandomNumber));
      this.excludedNumbers.push(newRandomNumber);
      this.id = newRandomNumber;

    }

    resultado():void{

      if(this.excludedNumbers.length >= 10){

        this.router.navigateByUrl('feedback');

      }

    }
  

  }