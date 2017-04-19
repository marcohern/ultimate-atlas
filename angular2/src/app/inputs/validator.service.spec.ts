import { TestBed, inject } from '@angular/core/testing'

import { HttpModule } from '@angular/http'

import { RequestService } from '../request.service'
import { ConfigService } from '../config.service'

import { ValidatorService } from './validator.service'

describe('ValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [ValidatorService, RequestService,ConfigService]
    });
  });

  it('should ...', inject([ValidatorService], (service: ValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
