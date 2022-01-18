import { Component, OnInit } from '@angular/core';
import { PromoService } from 'src/app/services/promo.service';

@Component({
  selector: 'app-generate-promo',
  templateUrl: './generate-promo.component.html',
  styleUrls: ['./generate-promo.component.scss'],
})
export class GeneratePromoComponent implements OnInit {
  amount = 0;
  date = '';
  constructor(private couponService: PromoService) {}

  ngOnInit(): void {}

  createCoupon() {
    this.date = this.date.split('-').reverse().join('-');
    console.log(this.date);
    this.couponService
      .createCoupon(this.amount, this.date)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
