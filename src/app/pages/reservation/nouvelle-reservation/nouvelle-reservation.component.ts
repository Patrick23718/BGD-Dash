import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouvelle-reservation',
  templateUrl: './nouvelle-reservation.component.html',
  styleUrls: ['./nouvelle-reservation.component.scss'],
})
export class NouvelleReservationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  headers = [
    '',
    'Ville',
    'Date et heure',
    'Téléphone',
    'Coiffure',
    'Coiffeuse',
    'Statut',
  ];

  reservations = [
    {
      img: 'assets/profil.png',
      ville: 'Lille',
      date: '2021-04-10',
      plage: '9h - 18h',
      tel: '0123456789',
      prest: 'Braid courte',
      coiffeuse: 'Gloria Stéphanie',
      status: 'AWAIT',
    },
    {
      img: 'assets/profil.png',
      ville: 'Lille',
      date: '2021-04-10',
      plage: '9h - 18h',
      tel: '0123456789',
      prest: 'Braid courte',
      coiffeuse: 'Gloria Stéphanie',
      status: 'ACCEPT',
    },
    {
      img: 'assets/profil.png',
      ville: 'Lille',
      date: '2021-04-10',
      plage: '9h - 18h',
      tel: '0123456789',
      prest: 'Braid courte',
      coiffeuse: 'Gloria Stéphanie',
      status: 'REFUSE',
    },
  ];
}
