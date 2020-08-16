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

  constructor(private service: ApiService,
              @Inject(DOCUMENT) private document: Document) { }

  addSchedule(formData: Schedule) {
    this.service.addSchedule(formData);
    this.reloadMethod();
  }

  refreshSchedule() {
    this.service.getSchedulesByForm().toPromise().then(res => this.list = res as Schedule[]);
  }

  reloadMethod(){ this.document.location.reload(); }

  updateSchedule(formData: Schedule) {
    this.service.updateSchedule(formData);
    this.reloadMethod();
  }

  deleteSchedule(schedule_id: number) {
    this.service.deleteSchedule(schedule_id);
    this.refreshSchedule();
  }
}
