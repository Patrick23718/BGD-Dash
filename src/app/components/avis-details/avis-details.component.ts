import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-avis-details',
  templateUrl: './avis-details.component.html',
  styleUrls: ['./avis-details.component.scss'],
})
export class AvisDetailsComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
  close() {
    this.dialog.closeAll();
  }
}
