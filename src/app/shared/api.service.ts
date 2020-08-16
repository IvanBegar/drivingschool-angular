import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ScheduleByGroupDTO} from '../schedule-by-group/model/schedule-by-group-dto';
import {Observable} from 'rxjs';
import {ScheduleByForm} from '../schedule-by-form/model/scheduleByForm';
import {Category} from '../category/model/category';
import {Teacher} from '../teachers/model/teacher';
import {Schedule} from '../schedules/shared/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080';
  private SCHEDULE_BY_GROUP_DTO_URL = `${this.BASE_URL}\\schedules\\per-groups`;
  private ALL_SCHEDULES_URL = `${this.BASE_URL}\\schedules`;
  private ALL_CATEGORIES_URL = `${this.BASE_URL}\\categories`;
  private TEACHER_URL = `${this.BASE_URL}\\teachers\\`;

  constructor(private http: HttpClient) {
  }

  getSchedulesByGroupDTO(): Observable<ScheduleByGroupDTO[]> {
    return this.http.get<ScheduleByGroupDTO[]>(this.SCHEDULE_BY_GROUP_DTO_URL);
  }

  getSchedulesByForm(): Observable<ScheduleByForm[]> {
    return this.http.get<ScheduleByForm[]>(this.ALL_SCHEDULES_URL);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.ALL_CATEGORIES_URL);
  }

  getTeacher(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(this.TEACHER_URL + id);
  }

  addSchedule(formData: Schedule){
    this.http.post(this.ALL_SCHEDULES_URL, formData).subscribe();
  }

  updateSchedule(formData: Schedule){
    this.http.put(this.ALL_SCHEDULES_URL, formData).subscribe();
  }

  deleteSchedule(schedule_id: number) {
    this.http.delete(this.ALL_SCHEDULES_URL + '/' + schedule_id).subscribe();
  }
}
