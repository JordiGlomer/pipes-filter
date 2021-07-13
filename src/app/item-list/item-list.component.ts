import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-pipes',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  stuff:Array<Object>=[];
  pattern!: string;

  constructor() {}

  addItem(item: string) {
    this.stuff.push({name: item});
  }
  ngOnInit(){

  }
}
