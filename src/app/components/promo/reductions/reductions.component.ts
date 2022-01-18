import { Component, OnInit } from '@angular/core';
import { PromoService } from 'src/app/services/promo.service';

@Component({
  selector: 'app-reductions',
  templateUrl: './reductions.component.html',
  styleUrls: ['./reductions.component.scss'],
})
export class ReductionsComponent implements OnInit {
  headers = ['Code promo', 'Date de création', 'Date limite d’utilisation'];

  codes: any[] = [];
  constructor(private couponService: PromoService) {
    this.getAllCoupon();
  }

  ngOnInit(): void {}

  getAllCoupon() {
    this.couponService.getCoupon().subscribe((res: any) => {
      this.codes = res;
      console.log(this.codes);
    });
  }

  deleteCoupon(id: string) {
    this.couponService.deleteCoupon(id).subscribe((res: any) => {
      console.log(res);
      this.getAllCoupon();
    });
  }
}
