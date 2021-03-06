import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from "@angular/router";
import { ProductService} from "../../../Services/product/product.service";

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  item={
    title:'',
    categories:[],
    image:{
      url:''
    },
    qty: 0,
    price:0
  };


  constructor(private activeRoute: ActivatedRoute, private service: ProductService) {

    this.service.item(this.activeRoute.snapshot.params.slug).subscribe((response) => {
      // @ts-ignore
      this.item = response.item;
    });
  }

  ngOnInit() {

  }

}
