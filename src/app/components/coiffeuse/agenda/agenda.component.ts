import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  detail = false;
  selected: Date = new Date(Date.now());
  headers = ['Nom&prénom', 'Mail', 'Téléphone', "Nombre d'avis", 'Action'];
  reservations = [
    {
      img: 'assets/profil.png',
      nom: 'Sarah',
      mail: 'noukimi.patrick@gmail.com',
      tel: '0123456789',
      avis: 4,
    },
    {
      img: 'assets/profil.png',
      nom: 'Clarisse',
      mail: 'clarisse@gmail.com',
      tel: '0123456789',
      avis: 4,
    },
    {
      img: 'assets/profil.png',
      nom: 'Linda',
      mail: 'mylicoco@gmail.com',
      tel: '0123456789',
      avis: 4,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
