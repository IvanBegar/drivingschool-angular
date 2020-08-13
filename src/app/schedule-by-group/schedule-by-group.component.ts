import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule-by-category',
  templateUrl: './schedule-by-group.component.html',
  styleUrls: ['./schedule-by-group.component.css']
})
export class ScheduleByGroupComponent implements OnInit {
  scheduleByGroupDTO: ScheduleByGroup = {
  group: '',
  scheduleForm: '',
  scheduleDescription: ''
};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  // getSchedulesByGroup(): ScheduleByGroup{
  // const url = 'http://localhost:8080/schedules-per-groups';
  //
  // }
}

export interface ScheduleByGroup {
  group: string;
  scheduleForm: string;
  scheduleDescription: string;
}
