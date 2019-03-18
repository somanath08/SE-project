import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors,
} from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  })
export class RegistrationFormComponent {
  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const passowrdValue = control.get('password').value;
    const confirmValue = control.get('confirm').value;
    return passowrdValue === confirmValue ? null : { confirmPassword: true };
  };

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-z\s]/)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-z\s]/)]),
    user: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[1-9]{2}[a-z]{4}[0-9]{2}$/),
    ]),
    pass: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}',
          ),
        ]),
        confirm: new FormControl('', [Validators.required]),
      },
      { validators: this.confirmPasswordValidator },
    ),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.pattern(/^[0-9]{10}$/)]),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.registerService.registeration(this.profileForm.value).subscribe((status) => {
      if (status === 'Saved') {
        console.log(status);
        this.router.navigate(['/login']);
      }
    });
  }
}
