import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../shared/user.model';
import {NgForm} from '@angular/forms';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;
  showMsg = false;

  constructor(private router: Router,
              private apiService: ApiService) { }

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
      role : ''
    };
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onSubmit(form: NgForm) {
      this.apiService.registerUser(form.value).subscribe(data => {
        this.showMsg = true;
      });
  }
}
