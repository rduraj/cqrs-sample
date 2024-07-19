import {Product} from "./Product.ts";

export interface ProductRepository {

    create(product: Product): Product

    update(product: Product): Product

    findAll(): Array<Product>

}
