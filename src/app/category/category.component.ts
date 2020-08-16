import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Category} from './model/category';

@Component({
  selector: 'app-prices',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  public getAllCategories(): Category[]{
    this.apiService.getAllCategories().subscribe(
      res => {
        this.categories = res;
      });
    return this.categories;
  }
}
