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

  ngOnInit(): void {}

  getPlan(date: string) {
    this.coiffeuseService.getPlanning(this.cid, date).subscribe((res: any) => {
      this.plage1 = false;
      this.plage2 = false;
      this.plage3 = false;
      this.plage4 = false;
      console.log(res);
      for (var i = 0; i < res.length; i++) {
        if (res[i]?.plage?.index === 1) {
          this.plage1 = true;
        }
        if (res[i]?.plage?.index === 2) {
          this.plage2 = true;
        }
        if (res[i]?.plage?.index === 3) {
          this.plage3 = true;
        }
        if (res[i]?.plage?.index === 4) {
          this.plage4 = true;
        }
      }
    });
  }

  test(e: any) {
    const date = new Date(e);
    var month = '';
    var day = '';

    if ((date.getMonth() + 1).toString().length === 1) {
      month = '0' + (date.getMonth() + 1).toString();
    } else {
      month = (date.getMonth() + 1).toString();
    }
    if (date.getDate().toString().length === 1) {
      day = '0' + date.getDate().toString();
    } else {
      day = date.getDate().toString();
    }
    console.log(month);
    console.log(day);

    const dateString = `${date.getFullYear()}-${month}-${day}`;

    console.log(dateString);
    this.getPlan(dateString);
  }
}
