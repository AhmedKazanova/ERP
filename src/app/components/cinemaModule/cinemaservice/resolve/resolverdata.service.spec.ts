import { TestBed } from '@angular/core/testing';

import { ResolverdataService } from './resolverdata.service';

describe('ResolverdataService', () => {
  let service: ResolverdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolverdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
