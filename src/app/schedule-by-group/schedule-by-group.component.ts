import { Component, OnInit } from '@angular/core';
import {ScheduleByGroup} from './model/schedule-by-group';
import {ApiService} from '../shared/api.service';


@Component({
  selector: 'app-schedule-by-category',
  templateUrl: './schedule-by-group.component.html',
  styleUrls: ['./schedule-by-group.component.css']
})
export class ScheduleByGroupComponent implements OnInit {
  schedules: ScheduleByGroup[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getSchedulesByGroupDTO();
  }

  public getSchedulesByGroupDTO(): ScheduleByGroup[]{
    this.apiService.getSchedulesByGroupDTO().subscribe(
      res => {
        this.schedules = res;
    });
    return this.schedules;
  }
}

