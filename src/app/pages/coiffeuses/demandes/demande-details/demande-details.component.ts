import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoiffeusesService } from 'src/app/services/coiffeuses.service';

@Component({
  selector: 'app-demande-details',
  templateUrl: './demande-details.component.html',
  styleUrls: ['./demande-details.component.scss'],
})
export class DemandeDetailsComponent implements OnInit {
  id = '';
  coiffeuse: any;
  prestations: any[] = [];
  galeries: any[] = [];
  loading = true;
  constructor(
    private coiffeuseService: CoiffeusesService,
    private activatedRoute: ActivatedRoute // private reservationService: ReservationsService, // private userCoiffeuse: UtilisateursService
  ) {
    this.activatedRoute.params.subscribe((paramsId) => {
      this.id = paramsId.uid;
      console.log(this.id);
    });
  }

  ngOnInit(): void {
    this.coiffeuseService.getCoiffeuse(this.id).subscribe((res: any) => {
      this.coiffeuse = res;
      this.coiffeuseService
        .getCoiffeuseGalerie(this.id)
        .subscribe((res1: any) => {
          this.galeries = res1.data;
          this.coiffeuseService
            .getCoiffeusePrestations(this.id)
            .subscribe((res2: any) => {
              this.prestations = res2;
              console.log(this.coiffeuse);
              console.log(this.galeries);
              console.log(this.prestations);
              this.loading = false;
            });
        });
    });
  }
}
