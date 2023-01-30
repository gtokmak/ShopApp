import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})

export class CategoryListComponent implements OnInit {
  @Output() selectCategory = new EventEmitter<Category>();

  public selectedCategory: Category = null;

  constructor(private categoryRepository: CategoryRepository) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory;
    this.selectCategory.emit(newCategory);
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
}
