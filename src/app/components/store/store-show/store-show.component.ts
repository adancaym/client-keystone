import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StoreService} from "../../../Services/store/store.service";
import {RackService} from "../../../Services/rack/rack.service";
import {ShelfService} from "../../../Services/shelf/shelf.service";

@Component({
  selector: 'app-store-show',
  templateUrl: './store-show.component.html',
  styleUrls: ['./store-show.component.css']
})
export class StoreShowComponent implements OnInit {

  item = {
    products:[]
  };
  constructor(private activeRoute: ActivatedRoute, private service: StoreService, private rackService: RackService , private shelfService: ShelfService) {
    this.service.item(this.activeRoute.snapshot.params.slug).subscribe((response) => {
      // @ts-ignore
      this.item = response.item;
      // @ts-ignore
      this.item.products = response.products;
    });
  }

  ngOnInit() {

  }

}
