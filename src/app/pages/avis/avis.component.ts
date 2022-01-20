import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AvisDetailsComponent } from 'src/app/components/avis-details/avis-details.component';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss'],
})
export class AvisComponent implements OnInit {
  headers = [
    'Nom&prénom',
    'Date de publication',
    'Coiffeuse',
    'Nombre d’étoile',
    '',
    'Actions',
  ];
  users: any[] = [
    {
      cliente: {
        nom: 'Moussot',
        prenom: 'Elisa',
        ville: 'test',
        email: '06/01/2022',
        imageURL: 'default.png',
      },
      etoiles: 4,
      coiffeuse: { nom: 'Sarah' },
    },
  ];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    const dialogRef = this.dialog.open(AvisDetailsComponent, {
      width: '750px',
      height: '600px',
      data: { name: 'Sarah' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
