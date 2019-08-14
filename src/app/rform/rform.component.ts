import { Component, OnInit } from '@angular/core';
import { RestBugService } from '../rest-bug.service';
import { DetailedBug } from '../_models/detailed.bug.model';
import { Observable } from 'rxjs';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  createForm: FormGroup;

  constructor(private restService: RestBugService, private router: Router) {
    this.createForm = new FormGroup({
      title: new FormControl(
        'default Title',
        [Validators.required, Validators.minLength(5)],
        [this.validateTitle.bind(this)]
      ),
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

  submit() {
    this.restService.createBug(this.createForm.value).subscribe(
      response => {
        console.log('POST', response);
        this.router.navigate(['rdisplay']);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  validateTitle(control: AbstractControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      let title = control.value;
      setTimeout(() => {
        resolve({ not_ok: true });
      }, 2000);
    });
  }
}
