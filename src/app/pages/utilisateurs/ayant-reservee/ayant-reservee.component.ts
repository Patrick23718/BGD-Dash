import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayant-reservee',
  templateUrl: './ayant-reservee.component.html',
  styleUrls: ['./ayant-reservee.component.scss'],
})
export class AyantReserveeComponent implements OnInit {
  headers = ['Nom&prénom', 'Mail', 'Téléphone', 'Date', 'Ville', 'Coiffeuses'];
  users = [
    {
      img: 'assets/profil.png',
      nom: 'Sarah',
      mail: 'noukimi.patrick@gmail.com',
      tel: '0123456789',
      date: '2022-01-02',
      ville: 'Nantes',
      coiffeuse: 'Nicole',
    },
    {
      img: 'assets/profil.png',
      nom: 'Clarisse',
      mail: 'clarisse@gmail.com',
      tel: '0123456789',
      date: '2022-01-02',
      ville: 'Rennes',
      coiffeuse: 'Gloria',
    },
    {
      img: 'assets/profil.png',
      nom: 'Linda',
      mail: 'mylicoco@gmail.com',
      tel: '0123456789',
      date: '2022-01-02',
      ville: 'Nantes',
      coiffeuse: 'Stéphanie',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
