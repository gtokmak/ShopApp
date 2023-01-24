import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"
import { RestService } from "./rest.service";
import { ProdctRepository } from "./product.repository";
import { CategoryRepository } from "./category.repository";

@NgModule({
    imports : [HttpClientModule],
    providers : [RestService, ProdctRepository, CategoryRepository]
})

export class ModelModule{

}