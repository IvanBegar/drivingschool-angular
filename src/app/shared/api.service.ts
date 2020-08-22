import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ScheduleByGroupDTO} from '../schedule-by-group/model/schedule-by-group-dto';
import {Observable} from 'rxjs';
import {ScheduleByForm} from '../schedule-by-form/model/scheduleByForm';
import {Category} from '../category/model/category';
import {Teacher} from '../teachers/model/teacher';
import {Schedule} from '../schedules/shared/schedule.model';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user: User;
  ROLE_TOKEN = 'userRole';
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  SESSION_TOKEN: string;
  private BASE_URL = 'http://localhost:8080';
  private USER_URL = `${this.BASE_URL}\\user`;
  private LOGIN_URL = `${this.BASE_URL}\\login`;
  private SCHEDULE_BY_GROUP_DTO_URL = `${this.BASE_URL}\\schedules\\per-groups`;
  private ALL_SCHEDULES_URL = `${this.BASE_URL}\\schedules\\all`;
  private ALL_CATEGORIES_URL = `${this.BASE_URL}\\categories\\all`;
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

  addSchedule(schedule: Schedule){
    this.http.post(this.ALL_SCHEDULES_URL, schedule).subscribe();
  }

  updateSchedule(formData: Schedule){
    this.http.put(this.ALL_SCHEDULES_URL, formData).subscribe();
  }

  deleteSchedule(schedule_id: number) {
    this.http.delete(this.ALL_SCHEDULES_URL + '/' + schedule_id).subscribe();
  }

  doLogin(userName: string, password: string) {
    return this.http.get(this.LOGIN_URL, { headers: { Authorization: this.createBasicAuthToken(userName, password), 'X-Requested-With': 'XMLHttpRequest' }});
  }

  createBasicAuthToken(userName: string, password: string) {
    return 'Basic ' + window.btoa(userName + ':' + password);
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.SESSION_TOKEN, username + ':' + password);
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.SESSION_TOKEN);
    sessionStorage.removeItem(this.ROLE_TOKEN);
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user != null) {
      return true;
    } else {
      return false;
    }
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) { return ''}
    return user;
  }

  getUser() {
    this.http.get<User>(this.USER_URL).subscribe(data => {
      this.user = data;
      sessionStorage.setItem(this.ROLE_TOKEN, this.user.role); });
  }

  isAdmin(): boolean{
    return sessionStorage.getItem(this.ROLE_TOKEN) === '[ROLE_ADMIN]';
  }

  registerUser(user: User) {
    return this.http.post(this.USER_URL, user);
  }
}
