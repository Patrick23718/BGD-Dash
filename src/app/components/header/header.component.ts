import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private localstorage: LocalstorageService) {}

  logOut() {
    this.localstorage.remove('utilisateur');
    this.localstorage.remove('x-access-token');
    location.reload();
  }

  ngOnInit(): void {}
}
