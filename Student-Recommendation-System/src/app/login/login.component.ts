import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  })
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  badCredentails = false;
  profileForm = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[1-9]{2}[A-Z||a-z]{4}[0-9]{2}$/),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.loginService.verifyCredentials(this.profileForm.value).subscribe((status) => {
      console.log(status);
      if (status === 'Success') {
        this.router.navigate([`/dashboard/${this.profileForm.get('user').value}`]);
      } else if (status === 'acad') {
        this.router.navigate(['/acadform']);
      } else {
        this.badCredentials = true;
      }
    });
  }
}
