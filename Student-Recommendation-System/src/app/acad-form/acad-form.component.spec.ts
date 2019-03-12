import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadFormComponent } from './acad-form.component';

describe('AcadFormComponent', () => {
  let component: AcadFormComponent;
  let fixture: ComponentFixture<AcadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
