import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map} from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-selectize',
  templateUrl: './selectize.component.html',
  styleUrls: ['./selectize.component.css']
})
export class SelectizeComponent implements OnInit {

  @ViewChild('input') input!: ElementRef;
  public posts$: any;

  constructor(private dataService: DataService) { }

  ngAfterViewInit(){
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      //@ts-ignore
      map(event => event['target'].value),
      debounceTime(700),
      distinctUntilChanged(),
      switchMap(value => this.dataService.getByText({text: value}))
    ).subscribe(results => {
      this.posts$ = results;
    })
  }

  ngOnInit(): void {

  }

}
