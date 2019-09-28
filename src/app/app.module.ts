import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductService} from "./Services/product.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductFormComponent,
    ProductsListComponent,
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
