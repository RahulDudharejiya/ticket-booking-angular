import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.user).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        // Redirect to ticket booking page
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
