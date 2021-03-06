import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menu = [
    {
      title: 'Reservation',
      open: false,
      sub: [
        {
          title: 'Nouvelle reservation',
          open: false,
          to: '/',
        },
        {
          title: 'Reservations',
          open: false,
          to: '/dashboard/reservations',
        },
      ],
    },
    {
      title: 'Coiffeuse',
      open: false,
      sub: [
        {
          title: 'Demande de coiffures',
          open: false,
          to: '/dashboard/coiffeuse/demandes',
        },
        {
          title: 'Liste de coiffeuses',
          open: false,
          to: '/dashboard/coiffeuse',
        },
      ],
    },
    {
      title: 'Utilisateurs',
      open: false,
      sub: [
        {
          title: 'Utilisateurs inscrits',
          open: false,
          to: '/dashboard/utilisateurs/inscrites',
        },
        {
          title: 'Client ayant reserve',
          open: false,
          to: '/dashboard/utilisateurs/reserve',
        },
      ],
    },
    {
      title: 'Contact',
      open: false,
      sub: [
        {
          title: 'Messages',
          open: false,
          to: '/dashboard/contact/message',
        },
        {
          title: 'Notification push',
          open: false,
          to: '/dashboard/contact/notification-push',
        },
        {
          title: 'Tchatt cliente coiffeuse',
          open: false,
          to: '/dashboard/contact/cliente-coiffeuse',
        },
      ],
    },
    {
      title: 'Code promo et avis client',
      open: false,
      sub: [
        {
          title: 'Gestion des codes promo',
          open: false,
          to: '/dashboard/promo',
        },
        {
          title: 'Gestion des avis clients',
          open: false,
          to: '/dashboard/avis',
        },
      ],
    },
    {
      title: 'Tableau de bord',
      open: false,
      sub: [],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  check() {
    for (var i = 0; i < this.menu.length; i++) {
      for (var j = 0; j < this.menu[i].sub.length; j++) {
        this.menu[i].sub[j].open = false;
      }
    }
  }
}
