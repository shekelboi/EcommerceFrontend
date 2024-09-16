import { TestBed } from '@angular/core/testing';

import { TestDataLoaderService } from './test-data-loader.service';

describe('TestDataLoaderService', () => {
  let service: TestDataLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestDataLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
