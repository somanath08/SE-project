import { Component, OnInit } from '@angular/core';
import {Course } from '../course-details';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FloatCourseService } from '../float-course.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-float-course',
  templateUrl: './float-course.component.html',
  styleUrls: ['./float-course.component.css']
})
export class FloatCourseComponent{

  constructor( 
    private floatCourseService: FloatCourseService,
    private router: Router,
    ) {
   }

  ngOnInit() {
  }
  course : Course[]=[
    {value: 'lab', viewValue: 'Lab'},
    {value: 'theory', viewValue: 'Theory'},
  ];
  prerequisites : String[]=['Programming', 'Algorithms and DS', 'Computer Networks', 'Operating System', 'Distributed Computing', 'Parallel Computing'];

  credits : Course[]=[
    {value: '2', viewValue: 'Two'},
    {value: '3', viewValue: 'Three'},
    {value: '4', viewValue: 'Four'},
  ];
  profileForm = new FormGroup({
    courseType: new FormControl(''),
    coursename: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z||a-z]$/),
    ]),
    credits: new FormControl(''),
    //prerequisite: new FormControl(''),
   });
   onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.floatCourseService.floatcourse(this.profileForm.value).subscribe((status) => {
      if (status === 'Saved') {
        console.log(status);
        this.router.navigate(['/dashboard']);
      }
    });
  }
  
}
