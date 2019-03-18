import { TestBed } from '@angular/core/testing';

import { AcadFormService } from './acad-form.service';

describe('AcadFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcadFormService = TestBed.get(AcadFormService);
    expect(service).toBeTruthy();
  });
});
