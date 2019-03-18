import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Details } from '../details';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  })
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Details', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Details', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    }),
  );

  loading = true;

  details: Details = {
    user: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.getDashboard(id).subscribe((details: Details) => {
      console.log(details);
      if (details) this.details = details;
      this.loading = false;
    });
  }
}
