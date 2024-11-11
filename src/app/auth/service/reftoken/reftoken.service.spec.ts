import { TestBed } from '@angular/core/testing';

import { ReftokenService } from './reftoken.service';

describe('ReftokenService', () => {
  let service: ReftokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReftokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
