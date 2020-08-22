import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Teacher} from './model/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
