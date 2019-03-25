 import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatCourseComponent } from './float-course.component';

describe('FloatCourseComponent', () => {
  let component: FloatCourseComponent;
  let fixture: ComponentFixture<FloatCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
