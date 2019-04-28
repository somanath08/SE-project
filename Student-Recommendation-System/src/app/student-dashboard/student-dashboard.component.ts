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

export interface Advice {
  courseName: String;
  courseId: String;
}

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
  })
export class StudentDashboardComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  displayedColumns: string[] = ['ID', 'Name', 'Type', 'Credits'];

  ngOnInit() {
    this.ifEnrolled = false;
    this.getDetails();
    this.getCourses();
    this.getAdvice();
    this.getEnrolledCourses();
    this.grades = Array.from({ length: 3 }, () => Math.floor(Math.random() * 4) + 6);
    this.average = Array.from({ length: 3 }, () => Math.floor(Math.random() * 5) + 4);
    console.log(this.grades, this.average);
  }

  grades: number[];

  average: number[];

  step = 0;

  recomendation = 'None';

  dataSource: Courses[];

  selectedCourse: Courses;

  courses: [];

  enrolled: string[];

  ifEnrolled = false;

  details: Details = {
    user: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
  };

  subjects = new FormControl('', Validators.required);

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.getPersonalDetails(id).subscribe((details: Details) => {
      console.log(details);
      if (details) {
        this.details = details;
      }
    });
  }

  getCourses(): void {
    this.dashboardService.getAllDetails().subscribe((courses: Courses[]) => {
      console.log(courses);
      if (courses) this.dataSource = courses;
    });
  }

  getAdvice(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.getCourseAdvice(id).subscribe((c: []) => {
      console.log(c);
      if (c) this.courses = c;
    });
  }

  addCourses(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.add(this.subjects.value, id).subscribe((status) => {
      console.log(status);
      if ((status = 'Saved')) {
        this.getEnrolledCourses();
      }
    });
  }

  getEnrolledCourses(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.getCourseDetails(id).subscribe((enrolled) => {
      console.log(enrolled);
      if (enrolled !== []) {
        this.ifEnrolled = true;
        this.enrolled = enrolled;
      }
    });
  }

  showCourse(name: string, i: number): void {
    console.log(i);
    if (this.grades[i] - this.average[i] >= 2) this.recomendation = 'Leave';
    else this.recomendation = 'Stay';
    this.setStep(4);
    for (let i = 0; i < this.dataSource.length; i++) {
      if (this.dataSource[i].courseName === name) {
        this.selectedCourse = this.dataSource[i];
        break;
      }
    }
  }

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
