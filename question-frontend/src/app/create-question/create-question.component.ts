import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ListServiceService } from '../service/list-service.service';
import { question } from '../model/question';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrl: './create-question.component.css',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule]
 
})
export class CreateQuestionComponent {

  questions!: question;

  constructor(private listService: ListServiceService){}

  createQuestion(){

    this.listService.save(this.questions);
 }

}
