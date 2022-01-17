import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-porte-monnaie',
  templateUrl: './porte-monnaie.component.html',
  styleUrls: ['./porte-monnaie.component.scss'],
})
export class PorteMonnaieComponent implements OnInit {
  constructor() {}

  @Input() cid: string = '';

  ngOnInit(): void {}
}
