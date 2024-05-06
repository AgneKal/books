import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})

export class LoginFormComponent {
  public isLoginMode = true;
  public email: string|null = null;
  public password: string|null = null;

  public constructor(private authService: AuthService, private router:Router){

  }

  public changeMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  public login(){
    if (this.email != null && this.password != null){
    this.authService.register(this.email, this.password, !this.isLoginMode).subscribe(
      (response)=>{
        this.router.navigate(['books'])
      }
    )
    }
  }
}
