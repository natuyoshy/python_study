import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  list:string[];
  constructor() { }

  ngOnInit() {
    this.list = ['らーめん', 'おかし'];
  }

  add(input){
    if (input){
      this.list.push(input);
    }
  }
}
