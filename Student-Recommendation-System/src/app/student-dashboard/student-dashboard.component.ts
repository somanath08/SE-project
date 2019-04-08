import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Details } from '../details';
import { DashboardService } from '../dashboard.service';

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

  ngOnInit() {
    this.getDetails();
  }

  step = 0;

  details: Details = {
    user: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
  };

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.getDashboard(id).subscribe((details: Details) => {
      console.log(details);
      if (details) this.details = details;
    });
  }

  getCourses(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.getDashboard(id).subscribe((details: Details) => {
      console.log(details);
      if (details) this.details = details;
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
