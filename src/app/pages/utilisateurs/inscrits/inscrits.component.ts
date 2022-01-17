import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-inscrits',
  templateUrl: './inscrits.component.html',
  styleUrls: ['./inscrits.component.scss'],
})
export class InscritsComponent implements OnInit {
  headers = ['Nom&prénom', 'Mail', 'Téléphone', 'Date', 'Ville'];
  users: any[] = [];
  constructor(private userService: UtilisateursService) {
    this.userService.getAllCliente().subscribe((res: any) => {
      this.users = res;
      console.log(res);
    });
  }

  ngOnInit(): void {}
}
