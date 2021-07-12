import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-pipes',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class CustomPipesComponent implements OnInit {
  stuff:Array<Object>=[];
  pattern!: string;

  constructor() {}

  ngOnInit(): void{}

  addItem(item: any) {
    this.stuff.push({name: item});
  }
 // styles: []
}
