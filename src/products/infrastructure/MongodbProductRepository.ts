import {ProductRepository} from "../domain/ProductRepository.ts";
import {Product} from "../domain/Product.ts";

export class MongodbProductRepository implements ProductRepository {
    create(product: Product): Product {
        return new Product();
    }

    findAll(): Array<Product> {
        return [new Product()];
    }

    update(product: Product): Product {
        return new Product();
    }


}
