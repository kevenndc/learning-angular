import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/placeholder.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  public getFotos(): Observable<Image[]> {
    return this.http.get<Image[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
