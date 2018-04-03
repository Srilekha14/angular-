import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router'
import {FormsModule} from '@angular/forms'
import {RemotecallService} from "./remotecall.service";
import { AppComponent } from './app.component';
import { ProductsComponent } from './shop/products/products.component';
import { CatalogueComponent } from './shop/catalogue/catalogue.component';
import { Component } from '@angular/core/src/metadata/directives';
import { TodoComponent } from './task/todo/todo.component';
import { ApiComponent } from './http/api/api.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CatalogueComponent,
    TodoComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
     { path : "catalogue",
      component:CatalogueComponent
    },
    {
      path:"products",
      component:ProductsComponent
    },
    {
      path:"todo",
      component:TodoComponent
    }
    {
      path:"remote",
      component:ApiComponent
    }
    ])
  ],
  providers: [RemotecallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
