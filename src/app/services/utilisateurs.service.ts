import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class UtilisateursService {
  private SERVER_URL: string = environment.serverURL;
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private localStorage: LocalstorageService
  ) {}

  userLogin(email: string, pwd: string): any {
    const API_URL = this.SERVER_URL + '/auth/signin';
    return this.httpClient.post(API_URL, {
      email: email,
      password: pwd,
    });
  }

  getAllCoiffeuse() {
    const API_URL = this.SERVER_URL + '/users/coiffeuses';
    return this.httpClient.get(API_URL);
  }

  getAllCliente() {
    const API_URL = this.SERVER_URL + '/add/users/clientes';
    const token = this.localStorage.get('x-access-token');
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getAllClienteReserve() {
    const API_URL = this.SERVER_URL + '/admin/cliente/reservation';
    const token = this.localStorage.get('x-access-token');
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getClienteById(id: string) {
    const API_URL = this.SERVER_URL + `/auth/user/${id}`;
    const token = this.localStorage.get('x-access-token');
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
}
