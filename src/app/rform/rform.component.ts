import { Component, OnInit } from '@angular/core';
import { RestBugService } from '../rest-bug.service';
import { DetailedBug } from '../_models/detailed.bug.model';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  createForm: FormGroup;

  constructor() {
    this.createForm = new FormGroup({
      title: new FormControl('default Title', [
        Validators.required,
        Validators.minLength(5)
      ]),
      description: new FormControl('default description', [
        Validators.required,
        Validators.minLength(5)
      ]),
      severity: new FormControl('0', [Validators.required]),
      isResolved: new FormControl(false, [Validators.required]),
      user: new FormControl('default user', [
        Validators.required,
        Validators.minLength(5)
      ]),
      createdAt: new FormControl(new Date(), [Validators.required]),
      id: new FormControl(-1, [Validators.required]),
      comments: new FormControl('default comments', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  ngOnInit() {
    console.log(this.createForm);
  }
}
