import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  })
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  verified = '';

  profileForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[1-9]{2}[A-Z||a-z]{4}[1-9]{2}$/),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.loginService.verifyCredentials(this.profileForm.value).subscribe((status) => {
      this.verified = status;
      console.log(this.verified);
    });
  }
}
