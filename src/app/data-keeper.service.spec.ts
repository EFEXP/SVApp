import { TestBed, inject } from '@angular/core/testing';

import { DataKeeperService } from './data-keeper.service';

describe('DataKeeperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataKeeperService]
    });
  });

  it('should be created', inject([DataKeeperService], (service: DataKeeperService) => {
    expect(service).toBeTruthy();
  }));
});
