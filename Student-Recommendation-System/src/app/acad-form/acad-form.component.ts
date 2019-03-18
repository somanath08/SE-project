import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, FormArray, FormControl,
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
      user: [''],
      stream: [''],
    }),

    university: this.fb.group({
      stream: [''],
      algo: [''],
      os: [''],
      database: [''],
      networks: [''],
      programming: [''],
      data: [''],
      ml: [''],
    }),

    mtech: this.fb.group({
      grade: [''],
      aalgo: [''],
      aos: [''],
      cn: [''],
      dc: [''],
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
