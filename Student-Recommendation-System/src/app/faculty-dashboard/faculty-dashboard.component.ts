import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Details } from '../details';
import { DashboardService } from '../dashboard.service';

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

  ngOnInit() {}

  // getPersonalDetails();

  floatCourse();

  studentList();
}
