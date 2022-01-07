import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  headers = ['Nom&prénom', 'Mail', 'Téléphone', "Nombre d'avis", 'Action'];
  reservations = [
    {
      img: 'assets/profil.png',
      nom: 'Lille',
      mail: '2021-04-10',
      tel: '0123456789',
      avis: 4,
    },
    {
      img: 'assets/profil.png',
      nom: 'Lille',
      mail: '2021-04-10',
      tel: '0123456789',
      avis: 4,
    },
    {
      img: 'assets/profil.png',
      nom: 'Lille',
      mail: '2021-04-10',
      tel: '0123456789',
      avis: 4,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
