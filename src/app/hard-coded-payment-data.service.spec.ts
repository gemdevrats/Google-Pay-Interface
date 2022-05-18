import { TestBed } from '@angular/core/testing';

import { HardCodedPaymentDataService } from './hard-coded-payment-data.service';

describe('HardCodedPaymentDataService', () => {
  let service: HardCodedPaymentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodedPaymentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
