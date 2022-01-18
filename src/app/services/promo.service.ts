import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ArgumentOutOfRangeError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class PromoService {
  private SERVER_URL: string = environment.serverURL;
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private localStorage: LocalstorageService
  ) {}

  getCoupon() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/coupon`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  deleteCoupon(id: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/coupon/${id}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.put(API_URL, {}, { headers: headers });
  }

  createCoupon(amount: number, expiration: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/coupon`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.post(
      API_URL,
      { amount: amount, expireDate: expiration },
      { headers: headers }
    );
  }
}
