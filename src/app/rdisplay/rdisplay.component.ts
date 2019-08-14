import { Component, OnInit } from '@angular/core';
import { DetailedBug } from '../_models/detailed.bug.model';
import { Observable } from 'rxjs';
import { RestBugService } from '../rest-bug.service';

@Component({
  selector: 'app-rdisplay',
  templateUrl: './rdisplay.component.html',
  styleUrls: ['./rdisplay.component.css']
})
export class RdisplayComponent implements OnInit {
  detailedBugs$: Observable<DetailedBug[]>;

  constructor(private restService: RestBugService) {
    this.detailedBugs$ = this.restService.getBugs();
  }

  ngOnInit() {}
}
