import { Routes } from '@angular/router';
import { ListQuestionComponent } from './list-question/list-question.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { QuestionFeedbackComponent } from './question-feedback/question-feedback.component';
import { LoginComponent } from './login/login.component';
import { authGuardFn } from './AuthAdmin/auth-guard.service';
import { AdminComponent } from './AuthAdmin/admin/admin.component';

export const routes: Routes = [
    {
        path:'', component: LoginComponent
     },
    {
        path:'login', component: LoginComponent
     },
    { 
        path: 'questions', component: ListQuestionComponent
    },
    { 
        path: 'create', component: CreateQuestionComponent, canActivate: [authGuardFn]
    },
    { 
        path: 'feedback', component: QuestionFeedbackComponent
    },
    { 
        path: 'admin', component: AdminComponent
    }
]