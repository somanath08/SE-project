import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialougeComponent } from '../dialouge/dialouge.component';
import { Course } from '../course-details';
import { FloatCourseService } from '../float-course.service';
@Component({
  selector: 'app-float-course',
  templateUrl: './float-course.component.html',
  styleUrls: ['./float-course.component.css'],
  })
export class FloatCourseComponent {
  constructor(
    private floatCourseService: FloatCourseService,
    private router: Router,
    public dialog: MatDialog,
  ) {}

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
    facId: new FormControl('', [Validators.required, Validators.pattern(/^fac[0-9]{3}$/)]),
    courseType: new FormControl('', Validators.required),
    courseName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z||a-z||0-9||\s||-]+$/),
    ]),
    credits: new FormControl(''),
    prerequisite: new FormControl(''),
  });

  openDialog(msg, valid): void {
    const dialogRef = this.dialog.open(DialougeComponent, {
      width: '250px',
      data: { title: 'Status', message: msg, valid },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (valid) this.router.navigate([`/dashboard/${this.courseForm.get('facId').value}`]);
      else this.courseForm.reset();
    });
  }

  onSubmit() {
    console.log(this.courseForm.value);
    this.floatCourseService.floatcourse(this.courseForm.value).subscribe((status) => {
      if (status === 'Saved') {
        console.log(status);
        this.openDialog('Your course has been floated', true);
      } else {
        console.log(status);
        this.openDialog('An error occured, please try again later', false);
      }
    });
  }
}
