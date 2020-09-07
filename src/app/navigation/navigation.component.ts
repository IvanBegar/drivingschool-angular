import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.apiService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  handleLogout() {
    this.apiService.logout();
}

  isAdmin(): boolean{
    return this.apiService.isAdmin();
  }

  isUserLoggedIn() {
    return this.apiService.isUserLoggedIn();
  }
}
