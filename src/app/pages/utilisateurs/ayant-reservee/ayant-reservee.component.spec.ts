import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyantReserveeComponent } from './ayant-reservee.component';

describe('AyantReserveeComponent', () => {
  let component: AyantReserveeComponent;
  let fixture: ComponentFixture<AyantReserveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyantReserveeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyantReserveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
