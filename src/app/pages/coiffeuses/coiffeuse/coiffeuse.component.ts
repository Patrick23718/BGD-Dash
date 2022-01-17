import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-coiffeuse',
  templateUrl: './coiffeuse.component.html',
  styleUrls: ['./coiffeuse.component.scss'],
})
export class CoiffeuseComponent implements OnInit {
  id = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private reservationService: ReservationsService,
    private userCoiffeuse: UtilisateursService
  ) {
    this.activatedRoute.params.subscribe((paramsId) => {
      this.id = paramsId.cid;
      console.log(this.id);
    });
  }

  ngOnInit(): void {}
}
