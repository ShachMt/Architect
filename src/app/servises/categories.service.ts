import { Injectable } from '@angular/core';
import { categories } from '../Classes/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  listCategories:categories[]=[
    
new categories("family","1"),
new categories("freinds","2")
  ]
  getListCategories():categories[]{
    return this.listCategories;
  }
  
  

}
