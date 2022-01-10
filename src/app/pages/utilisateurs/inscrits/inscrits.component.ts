import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscrits',
  templateUrl: './inscrits.component.html',
  styleUrls: ['./inscrits.component.scss'],
})
export class InscritsComponent implements OnInit {
  headers = ['Nom&prénom', 'Mail', 'Téléphone', 'Date', 'Ville'];
  users = [
    {
      img: 'assets/profil.png',
      nom: 'Sarah',
      mail: 'noukimi.patrick@gmail.com',
      tel: '0123456789',
      date: '2022-01-02',
      ville: 'Nantes',
    },
    {
      img: 'assets/profil.png',
      nom: 'Clarisse',
      mail: 'clarisse@gmail.com',
      tel: '0123456789',
      date: '2022-01-02',
      ville: 'Rennes',
    },
    {
      img: 'assets/profil.png',
      nom: 'Linda',
      mail: 'mylicoco@gmail.com',
      tel: '0123456789',
      date: '2022-01-02',
      ville: 'Nantes',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
