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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  formValue = '';

  profileForm = new FormGroup(
    {
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]{2}[A-Z||a-z]{4}[1-9]{2}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}',
        ),
      ]),
    }
  );

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.get('password').hasError('pattern'));
  }
}
