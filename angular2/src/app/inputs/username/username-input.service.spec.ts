import { TestBed, inject } from '@angular/core/testing';

import { UsernameInputService } from './username-input.service';

describe('UsernameInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsernameInputService]
    });
  });

  it('should ...', inject([UsernameInputService], (service: UsernameInputService) => {
    expect(service).toBeTruthy();
  }));
});
