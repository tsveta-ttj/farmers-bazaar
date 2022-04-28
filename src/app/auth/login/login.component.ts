import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router

  ) { }

  ngOnInit(): void {

  }

  handleLogin(): void {
    this.errorMessage = '';
    this.userService.login$(this.loginFormGroup.value).subscribe({
      next: user => {
        //TODO auth logic
        console.log(user);
        
      },
      error: (err)=>{
        this.errorMessage = err.error.message
      }
    });
  }

}
