import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  items = [
    {
      title: 'FAQ',
    },
    {
      title: 'CGU',
    },
    ,
    {
      title: 'Guide de coiffures des BFC',
    },
    ,
    {
      title: 'Mentions légales',
    },
    {
      title: 'Merci pour elles',
    },
    {
      title: 'Qui sommes nous?',
    },
    {
      title: 'Nous contacter',
    },
    {
      title: 'Plan du site',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
