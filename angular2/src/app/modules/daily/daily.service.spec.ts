import { TestBed, inject } from '@angular/core/testing';

import { DailyService } from './daily.service';

describe('DailyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyService]
    });
  });

  it('should ...', inject([DailyService], (service: DailyService) => {
    expect(service).toBeTruthy();
  }));
});
