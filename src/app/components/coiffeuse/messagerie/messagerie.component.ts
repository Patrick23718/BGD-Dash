import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss'],
})
export class MessagerieComponent implements OnInit {
  constructor() {}

  @Input() cid: string = '';

  ngOnInit(): void {}
}
