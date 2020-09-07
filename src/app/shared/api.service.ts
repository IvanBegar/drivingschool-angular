import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ScheduleByGroup} from '../schedule-by-group/model/schedule-by-group';
import {Observable} from 'rxjs';
import {ScheduleByForm} from '../schedule-by-form/model/scheduleByForm';
import {Category} from '../category/model/category';
import {Teacher} from '../teachers/model/teacher';
import {Schedule} from '../schedules/shared/schedule.model';
import {User} from './user.model';
import {Roles} from './roles.enum';
import {AuthenticationResponse} from '../login/model/authentication-response';
import {Student} from '../profile/model/student';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user: User;
  ROLE_TOKEN = 'userRole';
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  PHONE = '';
  TOKEN: string;
  private BASE_URL = 'http://localhost:8080';
  private USER_URL = `${this.BASE_URL}\\user`;
  private STUDENT_URL = `${this.BASE_URL}\\students`;
  private AUTHENTICATE_URL = `${this.BASE_URL}\\authenticate`;
  private GROUPS_SCHEDULE_URL = `${this.BASE_URL}\\groups\\schedules`;
  private ALL_SCHEDULES_URL = `${this.BASE_URL}\\schedules\\all`;
  private SCHEDULES_URL = `${this.BASE_URL}\\schedules`;
  private ALL_CATEGORIES_URL = `${this.BASE_URL}\\categories\\all`;
  private TEACHER_URL = `${this.BASE_URL}\\teachers\\`;

  constructor(private http: HttpClient) {
    this.user = {
      username: '',
      password: '',
      phone: '',
      role: ''
    };
  }

  getSchedulesByGroupDTO(): Observable<ScheduleByGroup[]> {
    return this.http.get<ScheduleByGroup[]>(this.GROUPS_SCHEDULE_URL);
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
    this.http.post(this.SCHEDULES_URL, schedule).subscribe();
  }

  updateSchedule(formData: Schedule){
    this.http.put(this.SCHEDULES_URL, formData).subscribe();
  }

  deleteSchedule(schedule_id: number) {
    this.http.delete(this.SCHEDULES_URL + '/' + schedule_id).subscribe();
  }

  getStudent(): Observable<Student> {
    return this.http.get<Student>(this.STUDENT_URL + '/phone=' + sessionStorage.getItem(this.PHONE));
  }

  updateStudent(student: Student) {
    return this.http.put(this.STUDENT_URL, student);
  }

  doLogin(request) {
    return this.http.post<AuthenticationResponse>(this.AUTHENTICATE_URL, request);
  }

  registerSuccessfulLogin(jwt) {
    sessionStorage.setItem(this.TOKEN, jwt);
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, jwt);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.TOKEN);
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

  getUser() {
    this.http.get<User>(this.USER_URL).subscribe(data => {
      this.user = data;
      sessionStorage.setItem(this.ROLE_TOKEN, this.user.role);
      sessionStorage.setItem(this.PHONE, this.user.phone); });
  }

  isAdmin(): boolean{
    return sessionStorage.getItem(this.ROLE_TOKEN) === Roles.ROLE_ADMIN;
  }

  registerUser(user: User) {
    return this.http.post(this.USER_URL, user);
  }
}
