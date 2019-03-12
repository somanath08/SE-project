import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, FormArray, FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-acad-form',
  templateUrl: './acad-form.component.html',
  styleUrls: ['./acad-form.component.css'],
  })
export class AcadFormComponent implements OnInit {
  matriculation = this.fb.group({
    percentage: [''],
  });

  puc = this.fb.group({
    percentage: [''],
    stream: [''],
  });

  university = this.fb.group({
    stream: [''],
    percentage: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
