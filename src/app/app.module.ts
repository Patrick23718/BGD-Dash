import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

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
import { DemandesComponent } from './pages/coiffeuses/demandes/demandes.component';
import { DemandeDetailsComponent } from './pages/coiffeuses/demandes/demande-details/demande-details.component';
import { InscritsComponent } from './pages/utilisateurs/inscrits/inscrits.component';
import { AyantReserveeComponent } from './pages/utilisateurs/ayant-reservee/ayant-reservee.component';
import { ClienteCoiffeuseComponent } from './pages/contact/cliente-coiffeuse/cliente-coiffeuse.component';
import { NotificationPushComponent } from './pages/contact/notification-push/notification-push.component';
import { MessagesComponent } from './pages/contact/messages/messages.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ListeCoiffeusesComponent } from './pages/coiffeuses/liste-coiffeuses/liste-coiffeuses.component';
import { ReductionsComponent } from './components/promo/reductions/reductions.component';
import { GeneratePromoComponent } from './components/promo/generate-promo/generate-promo.component';
import { CodePromoComponent } from './pages/code-promo/code-promo.component';
import { AvisComponent } from './pages/avis/avis.component';
import { AvisDetailsComponent } from './components/avis-details/avis-details.component';
import { DetailsClienteCoiffeuseComponent } from './pages/contact/cliente-coiffeuse/details-cliente-coiffeuse/details-cliente-coiffeuse.component';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
const config: SocketIoConfig = {
  url: environment.serverURL,
  options: {},
};

const materialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatRippleModule,
  MatDatepickerModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatSelectModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatDialogModule,
];

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
    DemandesComponent,
    DemandeDetailsComponent,
    InscritsComponent,
    AyantReserveeComponent,
    ClienteCoiffeuseComponent,
    NotificationPushComponent,
    MessagesComponent,
    LoginComponent,
    ListeCoiffeusesComponent,
    ReductionsComponent,
    GeneratePromoComponent,
    CodePromoComponent,
    AvisComponent,
    AvisDetailsComponent,
    DetailsClienteCoiffeuseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    materialComponents,
  ],
  exports: [materialComponents],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
