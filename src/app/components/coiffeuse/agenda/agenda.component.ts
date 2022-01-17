import { Component, Input, OnInit } from '@angular/core';
import { CoiffeusesService } from 'src/app/services/coiffeuses.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  detail = false;
  selected: Date = new Date(Date.now());
  headers = ['Nom&prénom', 'Mail', 'Téléphone', "Nombre d'avis", 'Action'];
  reservations = [
    {
      img: 'assets/profil.png',
      nom: 'Sarah',
      mail: 'noukimi.patrick@gmail.com',
      tel: '0123456789',
      avis: 4,
    },
    {
      img: 'assets/profil.png',
      nom: 'Clarisse',
      mail: 'clarisse@gmail.com',
      tel: '0123456789',
      avis: 4,
    },
    {
      img: 'assets/profil.png',
      nom: 'Linda',
      mail: 'mylicoco@gmail.com',
      tel: '0123456789',
      avis: 4,
    },
  ];
  constructor(private coiffeuseService: CoiffeusesService) {}
  plage1 = false;
  plage2 = false;
  plage3 = false;
  plage4 = false;

  @Input() cid: string = '';

  ngOnInit(): void {
    this.coiffeuseService
      .getPlanning(this.cid, '2022-01-15')
      .subscribe((res: any) => {
        this.plage1 = false;
        this.plage2 = false;
        this.plage3 = false;
        this.plage4 = false;
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          if (res?.plage?.index === 1) {
            this.plage1 = true;
          }
          if (res?.plage?.index === 2) {
            this.plage2 = true;
          }
          if (res?.plage?.index === 3) {
            this.plage3 = true;
          }
          if (res?.plage?.index === 4) {
            this.plage4 = true;
          }
        }
      });
  }
}
