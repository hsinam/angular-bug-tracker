import { Component, OnInit } from '@angular/core';
import { Bug } from '../_models/bug.model';
import { BugService } from '../_services/bug.service';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  bug: Bug = new Bug();
  severityLables$;

  constructor(private bugService: BugService) {
    this.severityLables$ = this.bugService.severityLabels;
  }

  ngOnInit() {}
}
