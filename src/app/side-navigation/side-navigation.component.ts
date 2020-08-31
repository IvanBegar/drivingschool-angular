import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {
  ROLE_TOKEN: string = this.apiService.ROLE_TOKEN;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  isAdmin(): boolean{
    return this.apiService.isAdmin();
  }
}
