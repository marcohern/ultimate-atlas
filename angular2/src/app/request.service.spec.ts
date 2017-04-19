import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http'
import { ConfigService } from './config.service'

import { RequestService } from './request.service';

describe('RequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [RequestService,ConfigService]
    });
  });

  it('should ...', inject([RequestService], (service: RequestService) => {
    expect(service).toBeTruthy();
  }));
});
