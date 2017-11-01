import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isClicked: boolean=false;
  constructor() { }

  ngOnInit() {
  }
onchange()
{
  console.log("DSsd"+this.isClicked);
this.isClicked=!this.isClicked;
}
}
