import { Component, OnInit } from '@angular/core';
import {ScheduleByGroupDTO} from './model/schedule-by-group-dto';
import {ApiService} from '../shared/api.service';


@Component({
  selector: 'app-schedule-by-category',
  templateUrl: './schedule-by-group.component.html',
  styleUrls: ['./schedule-by-group.component.css']
})
export class ScheduleByGroupComponent implements OnInit {
  schedules: ScheduleByGroupDTO[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getSchedulesByGroupDTO();
  }

  public getSchedulesByGroupDTO(): ScheduleByGroupDTO[]{
    this.apiService.getSchedulesByGroupDTO().subscribe(
      res => {
        this.schedules = res;
    });
    return this.schedules;
  }
}

