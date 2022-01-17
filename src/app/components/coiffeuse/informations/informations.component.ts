import { Component, Input, OnInit } from '@angular/core';
import { CoiffeusesService } from 'src/app/services/coiffeuses.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss'],
})
export class InformationsComponent implements OnInit {
  coiffeuse: any;
  prestations: any[] = [];
  galeries: any[] = [];
  loading = true;
  constructor(private coiffeyseService: CoiffeusesService) {}

  @Input() cid: string = '';

  ngOnInit(): void {
    this.coiffeyseService.getCoiffeuse(this.cid).subscribe((res: any) => {
      this.coiffeuse = res;
      this.coiffeyseService
        .getCoiffeuseGalerie(this.cid)
        .subscribe((res1: any) => {
          this.galeries = res1.data;
          this.coiffeyseService
            .getCoiffeusePrestations(this.cid)
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
