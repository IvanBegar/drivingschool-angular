import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleByFormComponent } from './schedule-by-form.component';

describe('ScheduleByFormComponent', () => {
  let component: ScheduleByFormComponent;
  let fixture: ComponentFixture<ScheduleByFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleByFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleByFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
