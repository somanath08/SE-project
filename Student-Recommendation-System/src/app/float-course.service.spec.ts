import { TestBed } from '@angular/core/testing';

import { FloatCourseService } from './float-course.service';

describe('FloatCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FloatCourseService = TestBed.get(FloatCourseService);
    expect(service).toBeTruthy();
  });
});
