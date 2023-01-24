import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "./rest.service";

@Injectable()

export class CategoryRepository implements OnInit {

    public categories: Category[] = [];

    constructor(private restService:RestService){
        this.restService.getCategories()
        .subscribe(categories => this.categories = categories);
    }

    ngOnInit(): void {
        
    }

    getCategory(id:number) {
       return this.categories.find(c => c.id === id);
    }

    getCategories(): Category[]{
        return this.categories;
    }
}