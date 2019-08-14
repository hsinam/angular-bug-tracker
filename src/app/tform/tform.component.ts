import { Component, OnInit } from '@angular/core';
import { Bug } from '../_models/bug.model';
import { BugService } from '../_services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  bug: Bug = new Bug();
  severityLables$;

  constructor(private bugService: BugService, private router: Router) {
    this.severityLables$ = this.bugService.severityLabels;
  }

  ngOnInit() {}

  submit() {
    this.bugService.create(this.bug).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['display']);
  }
}
