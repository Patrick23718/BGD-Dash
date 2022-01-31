import { Component, OnInit } from '@angular/core';
import { CoiffeusesService } from 'src/app/services/coiffeuses.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.scss'],
})
export class DemandesComponent implements OnInit {
  detail = true;
  selected: Date = new Date(Date.now());
  headers = ['Nom&prénom', 'Ville', 'Téléphone', 'Date', 'Contact'];
  coiffeuses: any[] = [];
  ville = '';
  prenom = '';

  constructor(private coiffeuseService: CoiffeusesService) {
    this.getCoiffeuses();
  }
  Filter() {
    this.getCoiffeuses();
  }

  ngOnInit(): void {}

  getCoiffeuses() {
    this.coiffeuseService
      .getAwaitCoiffeuse(this.prenom, this.ville)
      .subscribe((res: any) => {
        this.coiffeuses = res;
        console.log(this.coiffeuses);
      });
  }
}
