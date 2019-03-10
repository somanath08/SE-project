import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  })
export class RegistrationFormComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      checkPasswordStrength(),
    ]),
    confirm: new FormControl('', [Validators.required, Validators.minLength(8), confirmPassword()]),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.maxLength(10)]),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }
}
