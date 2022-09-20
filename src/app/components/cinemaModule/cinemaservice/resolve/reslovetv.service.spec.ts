import { TestBed } from '@angular/core/testing';

import { ReslovetvService } from './reslovetv.service';

describe('ReslovetvService', () => {
  let service: ReslovetvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReslovetvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
