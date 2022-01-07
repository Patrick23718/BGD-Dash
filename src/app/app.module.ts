import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NouvelleReservationComponent } from './pages/reservation/nouvelle-reservation/nouvelle-reservation.component';
import { ReservationsComponent } from './pages/reservation/reservations/reservations.component';
import { CoiffeuseComponent } from './pages/coiffeuses/coiffeuse/coiffeuse.component';
import { InformationsComponent } from './components/coiffeuse/informations/informations.component';
import { ReservationComponent } from './components/coiffeuse/reservation/reservation.component';
import { AgendaComponent } from './components/coiffeuse/agenda/agenda.component';
import { MessagerieComponent } from './components/coiffeuse/messagerie/messagerie.component';
import { PorteMonnaieComponent } from './components/coiffeuse/porte-monnaie/porte-monnaie.component';

const materialComponents = [MatToolbarModule, MatIconModule, MatTabsModule];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NouvelleReservationComponent,
    ReservationsComponent,
    CoiffeuseComponent,
    InformationsComponent,
    ReservationComponent,
    AgendaComponent,
    MessagerieComponent,
    PorteMonnaieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialComponents,
  ],
  exports: [materialComponents],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
