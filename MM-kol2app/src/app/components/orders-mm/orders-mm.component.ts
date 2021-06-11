import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-orders-mm',
  templateUrl: './orders-mm.component.html',
  styleUrls: ['./orders-mm.component.css']
})
export class OrdersMMComponent implements OnInit {

  public items$:any;

  constructor(private service: DataService) { }

  ngOnInit():void{
    this.getAll();
  }

  getAll(){
    //@ts-ignore
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }
}
