import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Details } from '../details';
import { DashboardService } from '../dashboard.service';

export interface Courses {
  courseType: String;
  courseName: String;
  courseId: String;
  credits: String;
}

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css'],
  })
export class FacultyDashboardComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  floated = false;

  data: Courses = null;

  step = 0;

  ngOnInit() {
    this.floatCourse();
  }

  // getPersonalDetails();

  floatCourse(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.getfloatedCourse(id).subscribe((course: Courses) => {
      console.log(course);
      if (course) {
        this.data = course;
        this.floated = true;
      }
    });
  }

  // studentList();

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
