import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdisplayComponent } from './rdisplay.component';

describe('RdisplayComponent', () => {
  let component: RdisplayComponent;
  let fixture: ComponentFixture<RdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
