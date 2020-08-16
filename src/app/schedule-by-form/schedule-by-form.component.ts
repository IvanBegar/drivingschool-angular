import { Component, OnInit } from '@angular/core';
import {ScheduleByForm} from './model/scheduleByForm';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-schedule-by-form',
  templateUrl: './schedule-by-form.component.html',
  styleUrls: ['./schedule-by-form.component.css']
})
export class ScheduleByFormComponent implements OnInit {
  schedules: ScheduleByForm[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSchedules();
  }

  public getSchedules(): ScheduleByForm[]{
    this.apiService.getSchedulesByForm().subscribe(
      res => {
        this.schedules = res;
      });
    return this.schedules;
  }
}
