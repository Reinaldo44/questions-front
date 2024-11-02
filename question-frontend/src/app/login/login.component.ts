import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../services/login.service';
import { user } from '../model/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{

  user: user = {

    email: ''

  }
  
  loginForm!: FormGroup;
  toUrl = 'questions';

  constructor(private router: Router, private loginService: LoginService) {

  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required)
    });
    
  }

  //envio para o backend do nickname de user.
  onSubmit() : void{ 

    this.user.email = this.loginForm.value.username;

    this.loginService.save(this.user).subscribe(

       {
        next: () => { 
          
          this.router.navigateByUrl(this.toUrl);
        },
           error(err) {

              console.log(err);

        },
       }
    );           
  }

}
