import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
  styles: [
    `
      .pt-100 {
        padding-top: 100px;
      }
    `,
  ],
})
export class ShopComponent {
  public selectedCategory: Category = null;
  public productPerPage = 2;
  public selectedPage = 1;

  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private cart: Cart
  ) {}

  get products(): Product[] {
    let index = (this.selectedPage - 1) * this.productPerPage;
    return this.productRepository
      .getProducts(this.selectedCategory)
      .slice(index, index + this.productPerPage);
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.productRepository.getProducts(this.selectedCategory).length /
          this.productPerPage
      )
    )
      .fill(0)
      .map((a, i) => i + 1);
  }
  changeCategory(newCategory?: Category) {
    this.selectedPage = 1;
    this.selectedCategory = newCategory;
  }

  changePage(page: number) {
    this.selectedPage = page;
  }

  addProductToCart(product:Product){
    this.cart.addItem(product);
  }
}
