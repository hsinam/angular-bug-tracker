import { Injectable } from '@angular/core';
import { bugs } from '../_data/data';
import { Bug } from '../_models/bug.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  private bugCollection: Bug[] = bugs;

  constructor() {}

  get bugs(): Observable<Bug[]> {
    return of(this.bugCollection);
  }
}
