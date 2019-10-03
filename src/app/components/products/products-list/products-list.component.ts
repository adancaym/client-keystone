import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../Services/product/product.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  list = [];
  constructor(private productService: ProductService) { }
  ngOnInit() {
     this.productService.list().subscribe((response) =>{
      // @ts-ignore
      this.list = response.list;
    })
  }

}
