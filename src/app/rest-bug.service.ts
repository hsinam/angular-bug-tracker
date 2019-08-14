import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailedBug } from './_models/detailed.bug.model';

@Injectable({
  providedIn: 'root'
})
export class RestBugService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/api/';

  getBugs(): Observable<DetailedBug[]> {
    return this.http.get(this.url + 'get') as Observable<DetailedBug[]>;
  }
}
