import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const log = window.sessionStorage.getItem("token");
  const url = route.url[0].path;
  if ((url === 'login' && !log) || (url === '/' && !log) || (url === 'welcome' && !log)) {
    return true;
  } else if ((url === 'login' && log) || (url === "" && log) || (url==="welcome" && log)) {
    return false;
  } else if (log) {
    return true;
  } else {
    return false;
  }
  
};
