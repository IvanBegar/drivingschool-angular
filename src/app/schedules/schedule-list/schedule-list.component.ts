import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../shared/schedule.service';
import {Schedule} from '../shared/schedule.model';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  constructor(public scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.refreshSchedule();
  }

  populateForm(sch: Schedule) {
    this.scheduleService.formData = Object.assign({}, sch);
  }

  deleteSchedule(schedule_id: number) {
    this.scheduleService.deleteSchedule(schedule_id);
    this.scheduleService.reloadMethod();
  }
}
