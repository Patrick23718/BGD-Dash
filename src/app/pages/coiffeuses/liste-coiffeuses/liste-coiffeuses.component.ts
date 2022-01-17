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
  constructor(private userService: UtilisateursService) {
    this.userService.getAllCoiffeuse().subscribe((res: any) => {
      this.reservations = res;
      console.log(this.reservations);
    });
  }

  ngOnInit(): void {}
}
