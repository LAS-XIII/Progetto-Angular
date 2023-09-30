import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

import { authGuard } from './auth.guard';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should allow access to login, /, and welcome when not logged in', () => {
    const routeSnapshot: ActivatedRouteSnapshot = {url: [{ path: 'login' }],} as ActivatedRouteSnapshot;
    const stateSnapshot: RouterStateSnapshot = {} as RouterStateSnapshot;
    const result = authGuard(routeSnapshot, stateSnapshot);
    expect(result).toBe(true);
  });

  it('should allow access to login, /, and welcome when not logged in', () => {
    const routeSnapshot: ActivatedRouteSnapshot = {url: [{ path: 'asd' }],} as ActivatedRouteSnapshot;
    const stateSnapshot: RouterStateSnapshot = {} as RouterStateSnapshot;
    const result = authGuard(routeSnapshot, stateSnapshot);
    expect(result).toBe(false);
  });

  it('should deny access to login, /, and welcome when logged in', () => {
    window.sessionStorage.setItem('token', 'your-token-here');
    const routeSnapshot: ActivatedRouteSnapshot = {
      url: [{ path: 'login' }],
    } as ActivatedRouteSnapshot;
    const stateSnapshot: RouterStateSnapshot = {} as RouterStateSnapshot;
    const result = authGuard(routeSnapshot, stateSnapshot);
    expect(result).toBe(false);
    window.sessionStorage.removeItem('token');
  });

  it('should deny access to login, /, and welcome when logged in', () => {
    window.sessionStorage.setItem('token', 'your-token-here');
    const routeSnapshot: ActivatedRouteSnapshot = {
      url: [{ path: 'asd' }],
    } as ActivatedRouteSnapshot;
    const stateSnapshot: RouterStateSnapshot = {} as RouterStateSnapshot;
    const result = authGuard(routeSnapshot, stateSnapshot);
    expect(result).toBe(true);
    window.sessionStorage.removeItem('token');
  });

});


