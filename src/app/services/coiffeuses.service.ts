import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class CoiffeusesService {
  private SERVER_URL: string = environment.serverURL;
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private localStorage: LocalstorageService
  ) {}

  getCoiffeuse(id: string) {
    const API_URL = this.SERVER_URL + `/auth/coiffeuse?uid=${id}`;
    return this.httpClient.get(API_URL);
  }

  getCoiffeuseGalerie(id: string) {
    const API_URL = this.SERVER_URL + `/coiffeuse/galerie/${id}`;
    return this.httpClient.get(API_URL);
  }

  getCoiffeusePrestations(id: string) {
    const API_URL = this.SERVER_URL + `/coiffeuse/prestation/${id}`;
    return this.httpClient.get(API_URL);
  }

  getPlanning(id: string, date: string) {
    const API_URL = this.SERVER_URL + `/planning/${id}/${date}`;
    return this.httpClient.get(API_URL);
  }

  getAwaitCoiffeuse() {
    const API_URL = this.SERVER_URL + `/admin/users/coiffeuses`;
    const token = this.localStorage.get('x-access-token');
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
}
