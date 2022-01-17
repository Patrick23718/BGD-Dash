import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ReservationsService } from '../services/reservations.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationResolver implements Resolve<boolean> {
  constructor(
    private activatedRoute: ActivatedRoute,
    private reservationService: ReservationsService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const id = route.paramMap.get('id') || '';
    const result = this.reservationService.getReservationById(id);
    result.subscribe((res: any) => {
      console.log(res);
    });
    return result;
  }
}
