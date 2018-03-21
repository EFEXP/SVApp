import { TestBed, inject } from '@angular/core/testing';

import {GetCardService } from './getCard.service';

describe('CardDetailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCardService]
    });
  });

  it('should be created', inject([GetCardService], (service: GetCardService) => {
    expect(service).toBeTruthy();
  }));
});
