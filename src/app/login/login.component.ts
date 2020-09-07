import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../shared/api.service';
import {AuthenticationRequest} from './model/authentication-request';
import {NgForm} from '@angular/forms';
import {AuthenticationResponse} from './model/authentication-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  request: AuthenticationRequest;
  errorMessage = 'Неправильний логін або пароль!';
  invalidLogin = false;
  loginSuccess = false;
  response: AuthenticationResponse;
  showPsw: boolean;
  showPhone: boolean;

  constructor(private router: Router,
              private apiService: ApiService) {
    this.showPsw = false;
    this.showPhone = false;
  }

  ngOnInit(): void {
    this.request = {
      username: '',
      password: ''
    };
    this.response = {
      jwt: ''
    };
  }

  goHome() {
    this.router.navigate(['/']);
  }

  public doLogin(form: NgForm) {
    this.apiService.doLogin(form.value).subscribe(
      data => {
        this.response.jwt = data.jwt;
        this.apiService.registerSuccessfulLogin(this.response.jwt);
        this.invalidLogin = false;
        this.loginSuccess = true;
        window.location.replace('/home');
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

  showPassword() {
    this.showPsw = !this.showPsw;
  }
}

