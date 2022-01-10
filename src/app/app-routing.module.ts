import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoiffeuseComponent } from './pages/coiffeuses/coiffeuse/coiffeuse.component';
import { DemandeDetailsComponent } from './pages/coiffeuses/demandes/demande-details/demande-details.component';
import { DemandesComponent } from './pages/coiffeuses/demandes/demandes.component';
import { ClienteCoiffeuseComponent } from './pages/contact/cliente-coiffeuse/cliente-coiffeuse.component';
import { MessagesComponent } from './pages/contact/messages/messages.component';
import { NotificationPushComponent } from './pages/contact/notification-push/notification-push.component';
import { NouvelleReservationComponent } from './pages/reservation/nouvelle-reservation/nouvelle-reservation.component';
import { ReservationsComponent } from './pages/reservation/reservations/reservations.component';
import { AyantReserveeComponent } from './pages/utilisateurs/ayant-reservee/ayant-reservee.component';
import { InscritsComponent } from './pages/utilisateurs/inscrits/inscrits.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    children: [
      { path: '', component: NouvelleReservationComponent },
      { path: 'reservations', component: ReservationsComponent },
      {
        path: 'coiffeuse',
        children: [
          { path: '', component: CoiffeuseComponent },
          {
            path: 'demandes',
            children: [
              { path: '', component: DemandesComponent },
              { path: 'details', component: DemandeDetailsComponent },
            ],
          },
        ],
      },
      {
        path: 'utilisateurs',
        children: [
          { path: 'inscrites', component: InscritsComponent },
          { path: 'reserve', component: AyantReserveeComponent },
        ],
      },
      {
        path: 'contact',
        children: [
          { path: 'message', component: MessagesComponent },
          { path: 'notification-push', component: NotificationPushComponent },
          { path: 'cliente-coiffeuse', component: ClienteCoiffeuseComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
