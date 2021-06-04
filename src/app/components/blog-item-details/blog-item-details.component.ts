import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  public image:string;
  public text:string;
  public id:number;
  public title:string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.image = '';
    this.text = '';
    this.id = 0;
    this.title = '';
  }

  ngOnInit(): void {
    let id:any;
    this.route.paramMap.subscribe(params => {
      id = params.get('id');
    });

    this.dataService.getById(id).subscribe(res => {
      // @ts-ignore
      this.image = res['image'];
      // @ts-ignore
      this.text = res['text'];
      //@ts-ignore
      this.id = res['id'];
      //@ts-ignore
      this.title = res['title'];
    })
  }

}
