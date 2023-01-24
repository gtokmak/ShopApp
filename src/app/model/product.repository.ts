import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { Product } from "./product.model";
import { RestService } from "./rest.service";

@Injectable()

export class ProdctRepository implements OnInit{
    
    private products: Product[] =[];

    constructor(private restService :RestService){
        this.restService.getProducts().
        subscribe( product => this.products = product);
    }
    ngOnInit(): void {
        
    }

    getProduct(id:number) {
        return this.products.find(i => i.id === id);
    }

    getProducts(category: Category = null): Product[] {
        if(category)
            return this.products.filter(p => p.category == category.name);
        else
            return this.products;
    }
}