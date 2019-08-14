import { Injectable } from '@angular/core';
import { bugs } from '../_data/data';
import { Bug } from '../_models/bug.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  private bugCollection: Bug[] = bugs;

  private severityLevels: string[] = ['High', 'Moderate', 'Low'];

  constructor() {}

  get bugs(): Observable<Bug[]> {
    return of(this.bugCollection);
  }

  get severityLabels(): Observable<String[]> {
    return of(this.severityLevels);
  }

  create(bug: Bug): Observable<Object> {
    this.bugCollection.push(bug);

    return of({
      status: 200,
      message: 'Success'
    });
  }
}
