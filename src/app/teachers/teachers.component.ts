import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Teacher} from './model/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teacher1: Teacher;
  teacher2: Teacher;
  teacher3: Teacher;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTeacher();
  }

  public getTeacher(): void{
    this.apiService.getTeacher(1).subscribe(
      res => {
        this.teacher1 = res;
      });
    this.apiService.getTeacher(2).subscribe(
    res => {
        this.teacher2 = res;
      });
    this.apiService.getTeacher(3).subscribe(
      res => {
        this.teacher3 = res;
      });
}
}
