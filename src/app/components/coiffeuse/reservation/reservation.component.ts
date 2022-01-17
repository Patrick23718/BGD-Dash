import { Component, Input, OnInit } from '@angular/core';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  page = 0;
  reservations: any[] = [];
  constructor(private reservationService: ReservationsService) {}
  @Input() cid: string = '';

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(page: number = 1) {
    console.log(this.cid);
    this.reservationService
      .getReservationCoiffeuse(this.cid, page)
      .subscribe((res: any) => {
        this.reservations = res.data;
        console.log(this.reservations);
      });
  }
}
