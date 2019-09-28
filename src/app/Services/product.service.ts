import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Product} from "../Models/Product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = 'http://localhost:3000/api/products/';
  constructor(private client: HttpClient) { }

  list(){
    return this.client.get(this.API_URL);
  }
  item(slug){
    return this.client.get(this.API_URL+slug);
  }
  create(product: Product){
    return this.client.post(this.API_URL,product);
  }
  update (slug, product: Product){
    return this.client.put(this.API_URL+slug,product);
  }
  delete(slug){
    return this.client.delete(this.API_URL+slug);
  }

}
