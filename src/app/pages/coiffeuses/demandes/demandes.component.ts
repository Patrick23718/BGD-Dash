import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.scss'],
})
export class DemandesComponent implements OnInit {
  detail = true;
  selected: Date = new Date(Date.now());
  headers = ['Nom&prénom', 'Ville', 'Téléphone', 'Date', 'Contact'];
  coiffeuses = [
    {
      img: 'assets/profil.png',
      nom: 'Sarah',
      ville: 'Bordeaux',
      tel: '0123456789',
      date: '2021-12-02',
    },
    {
      img: 'assets/profil.png',
      nom: 'Clarisse',
      ville: 'Nates',
      tel: '0123456789',
      date: '2012-11-12',
    },
    {
      img: 'assets/profil.png',
      nom: 'Linda',
      ville: 'Rennes',
      tel: '0123456789',
      date: '2012-12-12',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
