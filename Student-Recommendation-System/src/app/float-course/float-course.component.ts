import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../course-details';
import { FloatCourseService } from '../float-course.service';
@Component({
  selector: 'app-float-course',
  templateUrl: './float-course.component.html',
  styleUrls: ['./float-course.component.css'],
  })
export class FloatCourseComponent {
  constructor(private floatCourseService: FloatCourseService, private router: Router) {}

  course: Course[] = [{ value: 'lab', viewValue: 'Lab' }, { value: 'theory', viewValue: 'Theory' }];

  prerequisites: String[] = [
    'Programming',
    'Algorithms and DS',
    'Computer Networks',
    'Operating System',
    'Distributed Computing',
    'Parallel Computing',
  ];

  credits: Course[] = [
    { value: '2', viewValue: 'Two' },
    { value: '3', viewValue: 'Three' },
    { value: '4', viewValue: 'Four' },
  ];

  courseForm = new FormGroup({
    courseType: new FormControl('', Validators.required),
    coursename: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z||a-z||0-9||\s||-]+$/),
    ]),
    credits: new FormControl(''),
    prerequisite: new FormControl(''),
  });

  onSubmit() {
    console.log(this.courseForm.value);
    this.floatCourseService.floatcourse(this.courseForm.value);
  }
}
