import { ProductService } from './../../../service/product.service';
import { product } from './../../../model/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poductdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  products :product[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
  this.productService.GetProducts().subscribe(res=>{
    this.products=res
  });

}
}