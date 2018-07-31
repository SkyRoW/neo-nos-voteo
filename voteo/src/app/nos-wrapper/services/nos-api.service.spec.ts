import { TestBed, inject } from '@angular/core/testing';

import { NosApiService } from './nos-api.service';

describe('NosApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NosApiService]
    });
  });

  it('should be created', inject([NosApiService], (service: NosApiService) => {
    expect(service).toBeTruthy();
  }));
});
