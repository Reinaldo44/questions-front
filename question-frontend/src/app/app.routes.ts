import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { QuestionFeedbackComponent } from './question-feedback/question-feedback.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'', component: LoginComponent
     },
    {
        path:'login', component: LoginComponent
     },
    {
       path:'home', component: HomeComponent
    },
    { 
        path: 'questions', component: ListQuestionComponent
    },
    { 
        path: 'create', component: CreateQuestionComponent
    },
    { 
        path: 'feedback', component: QuestionFeedbackComponent
    }
]