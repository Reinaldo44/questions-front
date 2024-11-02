import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { ListServiceService } from '../services/list-service.service';
import { feedback } from '../model/feedback';

@Component({
  selector: 'app-question-feedback',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule,MatListModule,MatButtonModule],
  templateUrl: './question-feedback.component.html',
  styleUrl: './question-feedback.component.css'
})
export class QuestionFeedbackComponent implements OnInit{

  feedback!: feedback;

  constructor(private listService: ListServiceService){

  }

  ngOnInit(): void {
    
    this.getFeedback();
  }

  getFeedback(){

    this.listService.resultado().subscribe(data => {  this.feedback = data });

    
  }



}
