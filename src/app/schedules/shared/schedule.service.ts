import {Inject, Injectable} from '@angular/core';
import {Schedule} from './schedule.model';
import {ApiService} from '../../shared/api.service';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  formData: Schedule;
  list: Schedule[];

  constructor(private apiService: ApiService,
              @Inject(DOCUMENT) private document: Document) { }

  addSchedule(formData: Schedule) {
    this.apiService.addSchedule(formData);
  }

  refreshSchedule() {
    this.apiService.getSchedulesByForm().toPromise().then(res => this.list = res as Schedule[]);
  }

  reloadMethod(){ this.document.location.reload(); }

  updateSchedule(formData: Schedule) {
    this.apiService.updateSchedule(formData);
  }

  deleteSchedule(schedule_id: number) {
    this.apiService.deleteSchedule(schedule_id);
    this.refreshSchedule();
  }
}
