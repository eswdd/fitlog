import { TestBed } from '@angular/core/testing';

import { FitlogService } from './fitlog.service';

describe('FitlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FitlogService = TestBed.get(FitlogService);
    expect(service).toBeTruthy();
  });
});
