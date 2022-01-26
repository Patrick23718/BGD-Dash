import { Component, OnInit } from '@angular/core';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.scss'],
})
export class AllReservationsComponent implements OnInit {
  headers = ['Nom&prénom', 'Ville', 'Mail', 'Date', 'Coiffures', 'Contact', ''];
  reservations: any[] = [{}];
  page = 1;

  constructor(private reservationReservation: ReservationsService) {}

  ngOnInit(): void {
    this.getReservation(1);
  }

  getReservation(page: number, limit: number = 10) {
    if (page > 0) {
      this.reservationReservation
        .getReservationstatus(page, limit)
        .subscribe((res: any) => {
          console.log(res);
          this.reservations = res.data;
          this.page = res.currentPage;
          console.log(this.page);
        });
    } else {
      this.page = 1;
    }
  }

  cancelReservation(id: string) {
    this.reservationReservation.reservationRefuse(id).subscribe((res: any) => {
      this.getReservation(this.page);
    });
  }

  next() {
    // this.loading = true;
    this.getReservation(this.page + 1);
    // this.onScrollToTop();
  }

  prev() {
    // this.loading = true;
    this.getReservation(this.page - 1);
    // this.onScrollToTop();
  }
}
