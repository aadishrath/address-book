import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeopleList() {
    return this.http.get('https://randomuser.me/api/?results=50').
      pipe(map((data: Person[]) => {
        return data;
      })
    );
  }
}
