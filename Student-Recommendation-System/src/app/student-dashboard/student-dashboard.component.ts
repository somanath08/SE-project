import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Details } from '../details';
import { DashboardService } from '../dashboard.service';

export interface Courses {
  courseType: String;
  courseName: String;
  courseId: String;
  credits: String;
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
    this.getDetails();
    this.getCourses();
    this.getAdvice();
  }

  step = 0;

  dataSource: Courses[];

  courses: [];

  details: Details = {
    user: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
  };

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.getPersonalDetails(id).subscribe((details: Details) => {
      console.log(details);
      if (details) this.details = details;
    });
  }

  getCourses(): void {
    this.dashboardService.getAllDetails().subscribe((courses: Courses[]) => {
      console.log(courses);
      if (courses) this.dataSource = courses;
    });
  }

  getAdvice(): void {
    this.dashboardService.getCourseAdvice().subscribe((courses: []) => {
      console.log(courses);
      if (courses) this.courses = courses;
    });
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
