import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleByGroupComponent } from './schedule-by-group.component';

describe('ScheduleByCategoryComponent', () => {
  let component: ScheduleByGroupComponent;
  let fixture: ComponentFixture<ScheduleByGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleByGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleByGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
