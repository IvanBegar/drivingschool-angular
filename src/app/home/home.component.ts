import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getUser();
  }
}
