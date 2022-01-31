import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-liste-coiffeuses',
  templateUrl: './liste-coiffeuses.component.html',
  styleUrls: ['./liste-coiffeuses.component.scss'],
})
export class ListeCoiffeusesComponent implements OnInit {
  headers = ['Nom&prénom', 'Mail', 'Téléphone', 'Action'];
  reservations: any[] = [];
  ville = '';
  prenom = '';
  constructor(private userService: UtilisateursService) {
    this.getCoiffeuses();
  }

  ngOnInit(): void {}

  Filter() {
    this.getCoiffeuses();
  }

  getCoiffeuses() {
    this.userService
      .getAllCoiffeuse(this.ville, this.prenom)
      .subscribe((res: any) => {
        this.reservations = res;
        console.log(this.reservations);
      });
  }
}
