import { TestBed, inject } from '@angular/core/testing';

import { PlayerInformationService } from './player-information.service';

describe('PlayerInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerInformationService]
    });
  });

  it('should be created', inject([PlayerInformationService], (service: PlayerInformationService) => {
    expect(service).toBeTruthy();
  }));
});
