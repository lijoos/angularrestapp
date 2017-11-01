import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { ProductComponent } from './product.component';
import { Routes } from '@angular/router';
export const PRODUCT_ROUTE: Routes=[
{path:'',component:ProductdetailsComponent},
{path:'new',component:ProductaddComponent},
{path:'new/:id',component:ProductaddComponent}
]