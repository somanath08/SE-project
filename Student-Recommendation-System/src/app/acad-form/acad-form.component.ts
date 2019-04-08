import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, FormArray, FormControl, Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AcadFormService } from '../acad-form.service';

@Component({
  selector: 'app-acad-form',
  templateUrl: './acad-form.component.html',
  styleUrls: ['./acad-form.component.css'],
  })
export class AcadFormComponent {
  acadForm = this.fb.group({
    puc: this.fb.group({
      user: ['', Validators.required],
      stream: ['', Validators.required],
    }),

    university: this.fb.group({
      stream: ['', Validators.required],
      algo: ['', Validators.required],
      os: ['', Validators.required],
      database: ['', Validators.required],
      networks: ['', Validators.required],
      programming: ['', Validators.required],
      data: ['', Validators.required],
      ml: ['', Validators.required],
    }),

    mtech: this.fb.group({
      grade: ['', Validators.required],
      sem: [
        '',
        [
          Validators.required,
          Validators.pattern(/[1-2]/),
          Validators.minLength(1),
          Validators.maxLength(1),
        ],
      ],
      pc: ['', Validators.required],
      dc: ['', Validators.required],
      cn: ['', Validators.required],
      cg: ['', Validators.required],
      nn: ['', Validators.required],
      ip: ['', Validators.required],
    }),
  });

  constructor(
    private fb: FormBuilder,
    private acadService: AcadFormService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  nextClick() {
    console.log(this.acadForm.value);
  }

  onSubmit() {
    console.log(this.acadForm.value);
    this.acadService.saveDetails(this.acadForm.value).subscribe((status) => {
      if (status === 'Saved') {
        console.log(status);
        this.router.navigate([`/dashboard/${this.acadForm.get('puc').get('user').value}`]);
      }
    });
  }
}
