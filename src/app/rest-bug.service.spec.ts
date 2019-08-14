import { TestBed } from '@angular/core/testing';

import { RestBugService } from './rest-bug.service';

describe('RestBugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestBugService = TestBed.get(RestBugService);
    expect(service).toBeTruthy();
  });
});
