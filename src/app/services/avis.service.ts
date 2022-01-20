import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  private SERVER_URL: string = environment.serverURL;
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private localStorage: LocalstorageService
  ) {}

  getAwaitAvis() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/avis/status`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  updateAvis(id: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/avis/${id}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.put(API_URL, {}, { headers: headers });
  }

  deleteAvis(id: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/avis/${id}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.delete(API_URL, { headers: headers });
  }
}
