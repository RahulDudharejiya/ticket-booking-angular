import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signUp(this.user).subscribe(
      (response: any) => {
        console.log(response);
        // Redirect to login page
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
