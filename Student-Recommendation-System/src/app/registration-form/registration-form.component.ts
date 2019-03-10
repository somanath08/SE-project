import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  })
export class RegistrationFormComponent {
  formValue = '';

  confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const passowrdValue = control.get('password');
    const confirmValue = control.get('confirm');
    return passowrdValue === confirmValue ? { confirmPassword: true } : null;
  };

  profileForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-z\s]/)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-z\s]/)]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]{2}[A-Z]{4}[1-9]{2}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}',
        ),
      ]),
      confirm: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      mobile: new FormControl('', [Validators.pattern(/^[0-9]{10}$/)]),
    },
    { validators: this.confirmPasswordValidator },
  );

  onSubmit() {
    // TODO: Use EventEmitter with form value
  }
}
