import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-item-mm',
  templateUrl: './orders-item-mm.component.html',
  styleUrls: ['./orders-item-mm.component.css']
})
export class OrdersItemMMComponent implements OnInit {

  @Input() image:string;
  @Input() text:string;
  @Input() id:number;

  constructor() { 
    this.image = '';
    this.text = '';
    this.id = 0;
  }

  ngOnInit(): void {}
}
