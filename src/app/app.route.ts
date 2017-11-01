import { PRODUCT_ROUTE } from './component/product/product.route';
import { ProductComponent } from './component/product/product.component';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const APP_ROUTE_PROVIDER: Routes =[
{path:'products', component:ProductComponent,children:PRODUCT_ROUTE}    

];
export const routing= RouterModule.forRoot(APP_ROUTE_PROVIDER);


