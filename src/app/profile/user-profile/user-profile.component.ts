import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Student} from '../model/student';
import {ApiService} from '../../shared/api.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  student: Student;

  constructor(private apiService: ApiService,
              @Inject(DOCUMENT) private document: Document) {
    this.student = {
      student_id: null,
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '',
      phone: '',
      address: ''
    };
  }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.apiService.getStudent().subscribe(data => {
      this.student = data;
      console.log(this.student);
    });
  }

  reloadMethod(){ this.document.location.reload(); }

  updateStudentInformation(student: NgForm) {
    this.apiService.updateStudent(student.value).subscribe(data => {
    this.reloadMethod();
    });
  }
}
