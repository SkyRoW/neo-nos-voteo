import { TestBed, inject } from '@angular/core/testing';

import { PoolResolverService } from './pool-resolver.service';

describe('PoolResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoolResolverService]
    });
  });

  it('should be created', inject([PoolResolverService], (service: PoolResolverService) => {
    expect(service).toBeTruthy();
  }));
});
