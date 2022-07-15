import { TestBed } from '@angular/core/testing';

import { ReslovemovieService } from './reslovemovie.service';

describe('ReslovemovieService', () => {
  let service: ReslovemovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReslovemovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
