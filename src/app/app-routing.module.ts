import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AvisComponent } from './pages/avis/avis.component';
import { CodePromoComponent } from './pages/code-promo/code-promo.component';
import { CoiffeuseComponent } from './pages/coiffeuses/coiffeuse/coiffeuse.component';
import { DemandeDetailsComponent } from './pages/coiffeuses/demandes/demande-details/demande-details.component';
import { DemandesComponent } from './pages/coiffeuses/demandes/demandes.component';
import { ListeCoiffeusesComponent } from './pages/coiffeuses/liste-coiffeuses/liste-coiffeuses.component';
import { ClienteCoiffeuseComponent } from './pages/contact/cliente-coiffeuse/cliente-coiffeuse.component';
import { DetailsClienteCoiffeuseComponent } from './pages/contact/cliente-coiffeuse/details-cliente-coiffeuse/details-cliente-coiffeuse.component';
import { MessagesComponent } from './pages/contact/messages/messages.component';
import { NotificationPushComponent } from './pages/contact/notification-push/notification-push.component';
import { LoginComponent } from './pages/login/login.component';
import { AllReservationsComponent } from './pages/reservation/all-reservations/all-reservations.component';
import { NouvelleReservationComponent } from './pages/reservation/nouvelle-reservation/nouvelle-reservation.component';
import { ReservationsComponent } from './pages/reservation/reservations/reservations.component';
import { AyantReserveeComponent } from './pages/utilisateurs/ayant-reservee/ayant-reservee.component';
import { InscritsComponent } from './pages/utilisateurs/inscrits/inscrits.component';
import { ReservationResolver } from './resolvers/reservation.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'connexion', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: NouvelleReservationComponent },
      { path: 'promo', component: CodePromoComponent },
      { path: 'avis', component: AvisComponent },
      {
        path: 'reservations/:id',
        resolve: {
          reservation: ReservationResolver,
        },
        component: ReservationsComponent,
      },
      {
        path: 'reservations',
        // resolve: {
        //   reservation: ReservationResolver,
        // },
        component: AllReservationsComponent,
      },
      {
        path: 'coiffeuse',
        children: [
          { path: '', component: ListeCoiffeusesComponent },
          {
            path: 'demandes',
            children: [
              { path: '', component: DemandesComponent },
              { path: 'details/:uid', component: DemandeDetailsComponent },
            ],
          },
          { path: ':cid', component: CoiffeuseComponent },
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
          {
            path: 'cliente-coiffeuse',
            children: [
              { path: '', component: ClienteCoiffeuseComponent },
              {
                path: 'details/:cid',
                component: DetailsClienteCoiffeuseComponent,
              },
            ],
          },
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
