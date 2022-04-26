import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { emailValidator, passwordMatch } from '../utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: string = '';

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl(null, [Validators.required, emailValidator]),
    'username': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'repass': new FormControl(null, [passwordMatch(this.passwordControl)])
    })

  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  handleRegister(): void {
    this.errorMessage = '';


    const body = {
      email: this.registerFormGroup.value.email,
      username: this.registerFormGroup.value.username,
      password: this.registerFormGroup.value.passwords.password
    }

    this.userService.register$(body).subscribe({
      next: user => {
        //TODO auth logic
        console.log(user);
        this.router.navigate(['/home']);

      },
      error: (err) => {
        this.errorMessage = err.error.message
      }
    });

  }

}
