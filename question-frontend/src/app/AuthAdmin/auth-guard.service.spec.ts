import { TestBed } from '@angular/core/testing';

import { authGuardFn } from './auth-guard.service';
import { CanActivateFn } from '@angular/router';

describe('AuthGuardFn', () => {
  let service: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(authGuardFn);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
