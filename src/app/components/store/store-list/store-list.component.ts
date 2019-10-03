import { Component, OnInit } from '@angular/core';
import { StoreService} from "../../../Services/store/store.service";

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  constructor(private service: StoreService) { }

  ngOnInit() {
    this.service.list().subscribe((response) => {
      // @ts-ignore
      this.list = response.list;
    })
  }

}
