import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Admin } from '../../model/Admin';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  admin: Admin = {
    login: '',
    password: ''

  }
  
  loginForm!: FormGroup;
  toUrl = 'questions';

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    
  }

  //envio para o backend do nickname de user.
  onSubmit() : void{ 

    this.admin.login = this.loginForm.value.login;
    this.admin.password = this.loginForm.value.password;

    this.authService.login(this.admin);           
  }

}
