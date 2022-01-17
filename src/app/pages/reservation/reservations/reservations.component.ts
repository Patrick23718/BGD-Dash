import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
})
export class ReservationsComponent implements OnInit {
  id = '';
  reservation: any;
  coiffeuses: any[] = [];
  coiffeuse: any;
  modify = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private reservationService: ReservationsService,
    private userCoiffeuse: UtilisateursService
  ) {
    this.activatedRoute.params.subscribe((paramsId) => {
      this.id = paramsId.id;
      this.getReservation();
    });
  }

  ngOnInit(): void {
    this.getCoiffeuse();
  }

  getReservation() {
    this.reservationService
      .getReservationById(this.id)
      .subscribe((res: any) => {
        console.log(res);
        this.reservation = res;
      });
  }

  getCoiffeuse() {
    this.userCoiffeuse.getAllCoiffeuse().subscribe((res: any) => {
      console.log(res);
      this.coiffeuses = res;
    });
  }
  notif() {
    this.modify = true;
  }
  updateacoiffeuse() {
    this.reservationService
      .updateReservationCoiffeuse(this.id, this.coiffeuse._id)
      .subscribe((res: any) => {
        console.log(res);
        this.getReservation();
        this.modify = false;
      });
  }
  close() {
    this.modify = false;
  }
}
