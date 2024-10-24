import { TestBed } from '@angular/core/testing';

import { SubjectBrokerService } from './subject-broker.service';

describe('SubjectBrokerService', () => {
  let service: SubjectBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
