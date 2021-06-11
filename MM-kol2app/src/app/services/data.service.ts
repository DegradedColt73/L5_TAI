import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://kol2tai.herokuapp.com/api/order/items';

  constructor(private http:HttpClient) { }

  getAll():any {
    return this.http.get(this.url);
  }

  getById(id:number):any {
    return this.http.get(this.url + '/' + id);
  }
}
