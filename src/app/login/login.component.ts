import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../shared/api.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMessage = 'Неправильний логін або пароль!';
  successMessage = 'Ви успішно ввійшли!';
  invalidLogin = false;
  loginSuccess = false;

  constructor(private router: Router,
              private apiService: ApiService,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

  }

  goHome() {
    this.router.navigate(['/']);
  }

  doLogin() {
    this.apiService.doLogin(this.username, this.password).subscribe((result) => {
      window.location.replace('/home');
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.apiService.registerSuccessfulLogin(this.username, this.password);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
