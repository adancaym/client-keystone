import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component'
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductService} from "./Services/product/product.service";
import { ProductShowComponent } from './components/products/product-show/product-show.component';
import { StoreListComponent } from './components/store/store-list/store-list.component';
import { StoreShowComponent } from './components/store/store-show/store-show.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductFormComponent,
    ProductsListComponent,
    ProductShowComponent,
    StoreListComponent,
    StoreShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
