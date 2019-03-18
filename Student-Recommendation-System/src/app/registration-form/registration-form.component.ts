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
    const passowrdValue = control.get('password');
    const confirmValue = control.get('confirm');
    return passowrdValue === confirmValue ? { confirmPassword: true } : null;
  };

  profileForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-z\s]/)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-z\s]/)]),
      user: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]{2}[a-z]{4}[1-9]{2}$/),
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
    console.log(this.profileForm.value);
    this.registerService.registeration(this.profileForm.value).subscribe((status) => {
      if (status === 'Saved') {
        console.log(status);
        this.router.navigate(['/login']);
      }
    });
  }
}
