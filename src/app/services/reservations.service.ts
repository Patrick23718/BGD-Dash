import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private SERVER_URL: string = environment.serverURL;
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private localStorage: LocalstorageService
  ) {}

  getReservation(page: number = 1, limit: number = 10) {
    const token = this.localStorage.get('x-access-token');
    const API_URL =
      this.SERVER_URL + `/admin/reservation?page=${page}&limit=${limit}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  reservationRefuse(id: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/admin/refuse/reservation/${id}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.put(API_URL, {}, { headers: headers });
  }

  getReservationstatus(
    page: number = 1,
    limit: number = 10,
    nom: string = '',
    ville: string = ''
  ) {
    const token = this.localStorage.get('x-access-token');
    const API_URL =
      this.SERVER_URL +
      `/admin/reservation/status?page=${page}&limit=${limit}&nom=${nom}&ville=${ville}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getReservationById(id: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/admin/reservation/${id}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  updateReservationCoiffeuse(id: string, coiffeuse: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/admin/reservation/change/${id}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.put(API_URL, { coiffeuse }, { headers: headers });
  }

  getReservationCoiffeuse(id: string, page: number = 1) {
    const token = this.localStorage.get('x-access-token');
    const API_URL =
      this.SERVER_URL + `/admin/reservation/coiffeuse/${id}?page=${page}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
}
