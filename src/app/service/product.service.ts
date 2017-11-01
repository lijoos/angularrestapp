import {  Http,Headers,Response } from '@angular/http';
import { product } from './../model/product.model';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
products :product[];
  constructor(private http:Http) { }

  GetProducts(id?:number)
  {
    console.log("sad"+id); 
let headers = new Headers(); 
 headers.append('Content-Type','application/json');
 let url="http://localhost/AngulaestApi/api/products";
 if(id!=undefined)
 {
 console.log("sad----"+id);
 url=url+'/'+id;
 }
   return this.http.get(url,{headers: headers}).map(res=>res.json());
  }
  AddProduct(product:product)
   {
   let headers=new Headers();
   let body=JSON.stringify(product)
   headers.append('Content-Type','application/json');
   return this.http.post("http://localhost/AngulaestApi/api/products",body,{headers:headers}).map(res => res.json());
   }
}
 
