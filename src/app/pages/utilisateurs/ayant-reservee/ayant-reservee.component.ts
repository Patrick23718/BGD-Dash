import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-ayant-reservee',
  templateUrl: './ayant-reservee.component.html',
  styleUrls: ['./ayant-reservee.component.scss'],
})
export class AyantReserveeComponent implements OnInit {
  headers = ['Nom&prénom', 'Mail', 'Téléphone', 'Date', 'Ville', 'Coiffeuses'];
  users: any[] = [];
  constructor(private userService: UtilisateursService) {
    this.userService.getAllClienteReserve().subscribe((res: any) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        console.log(res[i]);
        this.userService
          .getClienteById(res[i]._id.cliente)
          .subscribe((ress: any) => {
            this.userService
              .getClienteById(res[i]._id.coiffeuse)
              .subscribe((resss: any) => {
                this.users.push({ cliente: ress, coiffeuse: resss });
              });
          });
      }
    });
  }

  ngOnInit(): void {}
}
