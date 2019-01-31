import { TestBed } from '@angular/core/testing';

import { MeanstackService } from './meanstack.service';

describe('MeanstackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeanstackService = TestBed.get(MeanstackService);
    expect(service).toBeTruthy();
  });
});
