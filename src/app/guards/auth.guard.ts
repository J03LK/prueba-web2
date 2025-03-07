import { CanActivateFn } from "@angular/router";

export const autenticaGuard: CanActivateFn = (route, state) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    if (localStorage.getItem("login") === "true") {
      return true;
    }
  }
  return false;
};
