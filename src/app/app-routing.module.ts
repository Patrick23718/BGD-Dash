import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoiffeuseComponent } from './pages/coiffeuses/coiffeuse/coiffeuse.component';
import { NouvelleReservationComponent } from './pages/reservation/nouvelle-reservation/nouvelle-reservation.component';
import { ReservationsComponent } from './pages/reservation/reservations/reservations.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    children: [
      { path: '', component: NouvelleReservationComponent },
      { path: 'reservations', component: ReservationsComponent },
      { path: 'coiffeuse', component: CoiffeuseComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
