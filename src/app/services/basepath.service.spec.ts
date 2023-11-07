import { TestBed } from '@angular/core/testing';

import { BasepathService } from './basepath.service';

describe('BasepathService', () => {
  let service: BasepathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasepathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
