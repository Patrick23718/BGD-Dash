import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-coiffeuse',
  templateUrl: './cliente-coiffeuse.component.html',
  styleUrls: ['./cliente-coiffeuse.component.scss'],
})
export class ClienteCoiffeuseComponent implements OnInit {
  tchats = [
    {
      img: 'assets/profil.png',
      message: 'Je voudrais savoir si...',
      time: 'il y a 1j',
      coiffeuse: 'Gloria Stéphanie',
    },
    {
      img: 'assets/profil.png',
      message: 'Ok ça marche, je réserve alors...',
      coiffeuse: 'Linda',
      time: 'il y a 3j',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
