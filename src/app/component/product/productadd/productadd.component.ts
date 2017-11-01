import { product } from './../../../model/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  product:product;
   private subscription: Subscription;
  constructor(private productSevice:ProductService,
              private router:Router,
               private activatedRoute:ActivatedRoute) { 

              }

  ngOnInit() {
    this.subscription=this.activatedRoute.params.subscribe(
      (param:any)=>{
       let id=param['id'];
       
        this.productSevice.GetProducts(id).subscribe(res=>{
        this.product=res;
        
        ;
  });
      }
    )
  }
onFormSubmit()
{
const product = {
      id:0,
      name: this.product.name,
      description: this.product.description,
      category: this.product.category
    }
    
    this.productSevice.AddProduct(product).subscribe(res=>{
      if(res.ID!=null)
       this.router.navigate(['/products']);
       //else

    });

}
}
