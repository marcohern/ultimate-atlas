import { TestBed, inject } from '@angular/core/testing'

import { HttpModule } from '@angular/http'

import { AuthService } from './auth.service'
import { RequestService } from '../request.service'
import { ConfigService } from '../config.service'

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [AuthService, RequestService, ConfigService]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
