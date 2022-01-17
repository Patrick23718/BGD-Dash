import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private localstorage: LocalstorageService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let test = false;

    let json = this.localstorage.get('utilisateur');
    if (json === null) {
      this.router.navigate(['connexion']);
    } else {
      const user = JSON.parse(json);
      if (user !== null && user.role === 'admin') {
        test = true;
      } else {
        this.router.navigate(['connexion']);
      }
    }

    return test;
  }
}
