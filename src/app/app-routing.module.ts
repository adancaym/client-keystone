import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListComponent} from "./components/products/products-list/products-list.component";
import {ProductShowComponent} from "./components/products/product-show/product-show.component";
import {StoreListComponent} from "./components/store/store-list/store-list.component";
import {StoreShowComponent} from "./components/store/store-show/store-show.component";


const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'stores',
    component: StoreListComponent
  },
  {
    path: 'products/show/:slug',
    component: ProductShowComponent
  },
  {
    path: 'stores/show/:slug',
    component: StoreShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
