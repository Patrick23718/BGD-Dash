import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-nouvelle-reservation',
  templateUrl: './nouvelle-reservation.component.html',
  styleUrls: ['./nouvelle-reservation.component.scss'],
})
export class NouvelleReservationComponent implements OnInit {
  loading = true;
  page = 0;
  constructor(private reservationReservation: ReservationsService) {}

  @Output() scrollToTop = new EventEmitter<void>();

  ngOnInit(): void {
    this.getReservation(1);
  }

  onScrollToTop(): void {
    this.scrollToTop.emit();
  }

  getReservation(page: number, limit: number = 10) {
    if (page > 0) {
      this.reservationReservation
        .getReservation(page, limit)
        .subscribe((res: any) => {
          console.log(res);
          this.reservations = res.data;
          this.page = res.currentPage;
          console.log(this.page);
          this.loading = false;
        });
    } else {
      this.page = 1;
    }
  }
  headers = [
    'Ville',
    'Date et heure',
    'Téléphone',
    'Coiffure',
    'Coiffeuse',
    'Statut',
  ];
  next() {
    this.loading = true;
    this.getReservation(this.page + 1);
    this.onScrollToTop();
  }

  prev() {
    this.loading = true;
    this.getReservation(this.page - 1);
    this.onScrollToTop();
  }

  reservations: any[] = [
    // {
    //   img: 'assets/profil.png',
    //   ville: 'Lille',
    //   date: '2021-04-10',
    //   plage: '9h - 18h',
    //   tel: '0123456789',
    //   prest: 'Braid courte',
    //   coiffeuse: 'Gloria Stéphanie',
    //   status: 'AWAIT',
    // },
    // {
    //   img: 'assets/profil.png',
    //   ville: 'Lille',
    //   date: '2021-04-10',
    //   plage: '9h - 18h',
    //   tel: '0123456789',
    //   prest: 'Braid courte',
    //   coiffeuse: 'Gloria Stéphanie',
    //   status: 'ACCEPT',
    // },
    // {
    //   img: 'assets/profil.png',
    //   ville: 'Lille',
    //   date: '2021-04-10',
    //   plage: '9h - 18h',
    //   tel: '0123456789',
    //   prest: 'Braid courte',
    //   coiffeuse: 'Gloria Stéphanie',
    //   status: 'REFUSE',
    // },
  ];
}
