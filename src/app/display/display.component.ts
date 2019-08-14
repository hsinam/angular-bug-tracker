import { Component, OnInit } from '@angular/core';
import { BugService } from '../_services/bug.service';
import { Observable } from 'rxjs';
import { Bug } from '../_models/bug.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  bugs$: Observable<Bug[]>;
  constructor(private bugService: BugService) {}

  ngOnInit() {
    this.bugs$ = this.bugService.bugs;
  }
}
