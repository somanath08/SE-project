import { Component, OnInit } from '@angular/core';
import {Course } from '../course-details';
@Component({
  selector: 'app-float-course',
  templateUrl: './float-course.component.html',
  styleUrls: ['./float-course.component.css']
})
export class FloatCourseComponent{

  constructor() { }

  ngOnInit() {
  }
  course : Course[]=[
    {value: 'lab-0', viewValue: 'Lab'},
    {value: 'theory-1', viewValue: 'Theory'},
  ];

}
