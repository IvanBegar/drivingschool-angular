import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../shared/user.model';
import {NgForm, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;
  showMsg = false;
  userAlreadyExist = false;
  mobNumberPattern = '\\+380[0-9]{9}$';
  showPsw: boolean;
  showPhone: boolean;

  constructor(private router: Router,
              private apiService: ApiService) {
    this.showPsw = false;
    this.showPhone = false;
  }

  ngOnInit(): void {
    this.resetForm();
    this.showMsg = false;
  }

  resetForm(form?: NgForm): void{
    if (form != null){
      form.resetForm();
    }
    this.user = {
      username : '',
      password : '',
      phone : '',
      role : ''
    };
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onSubmit(form: NgForm) {
    this.apiService.registerUser(form.value).subscribe(data => {
      this.showMsg = true;
      this.userAlreadyExist = false;
    }, (error: HttpErrorResponse) => {
      this.userAlreadyExist = true;
    });
  }

  showPassword() {
    this.showPsw = !this.showPsw;
  }

  selectInput(event) {
    const selected = event.target.value;
    if (selected === 'User') {
      this.showPhone = true;
    } else {
      this.showPhone = false;
    }
  }
}
