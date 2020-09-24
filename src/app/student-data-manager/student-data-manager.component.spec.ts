import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDataManagerComponent } from './student-data-manager.component';

describe('StudentDataManagerComponent', () => {
  let component: StudentDataManagerComponent;
  let fixture: ComponentFixture<StudentDataManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDataManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDataManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
