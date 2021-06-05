import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://blogtai.herokuapp.com/api/';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.url + 'posts/');
  }

  getById(id:number){
    return this.http.get(this.url + 'posts/' + id);
  }

  getByText(data:any){
    return this.http.post(this.url + 'posts/', data);
  }
}
