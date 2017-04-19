import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http'

import { RequestService } from '../../request.service'
import { ConfigService } from '../../config.service'

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [UserService,RequestService,ConfigService]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
