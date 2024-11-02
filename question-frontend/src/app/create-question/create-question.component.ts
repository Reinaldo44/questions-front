import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListServiceService } from '../services/list-service.service';
import { question } from '../model/question';
import { answers } from '../model/answers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrl: './create-question.component.css',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule]
 
})
export class CreateQuestionComponent implements OnInit{

  questions!: question;

  questionForm!: FormGroup;



  constructor(private listService: ListServiceService,private router: Router){}

  ngOnInit(): void {

    this.questionForm = new FormGroup({

      descricao: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      answer1: new FormControl('', Validators.required),
      answerBoolean1: new FormControl('', Validators.required),
      answer2: new FormControl('', Validators.required),
      answerBoolean2: new FormControl('', Validators.required),
      answer3: new FormControl('', Validators.required),
      answerBoolean3: new FormControl('', Validators.required),
      answer4: new FormControl('', Validators.required),
      answerBoolean4: new FormControl('', Validators.required)

    });

  }

  onSubmit(): void{

      const resposta1: answers = {
        
          descricao: this.questionForm.value.answer1,
          acerto: this.questionForm.value.boolean1,
      };
  
      const resposta2: answers = {
          
          descricao: this.questionForm.value.answer2, // Certifique-se de usar o campo correto aqui
          acerto: this.questionForm.value.boolean2, // Certifique-se de usar o campo correto aqui
      };

      
      const resposta3: answers = {
   
        descricao: this.questionForm.value.answer3,
        acerto: this.questionForm.value.boolean3,
    };

    const resposta4: answers = {
        descricao: this.questionForm.value.answer3, 
        acerto: this.questionForm.value.boolean2, 
    };
  
      const pergunta: question = {
          descricao: this.questionForm.value.descricao,
          categoria: this.questionForm.value.categoria,
          answers: [
            resposta1, 
            resposta2,
            resposta3,
            resposta4
          ],
      };

    
  
    this.listService.save(pergunta).subscribe({
        
      next: () => {

        this.router.navigate(['/create']);
        
    }       
    ,
      error: (erro) => {
      alert("Usuário ou Senha inválido(s)!");
      console.log(erro);
    }
  }
); 

  }
     
}


