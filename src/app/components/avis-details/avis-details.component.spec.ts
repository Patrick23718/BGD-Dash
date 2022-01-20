import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisDetailsComponent } from './avis-details.component';

describe('AvisDetailsComponent', () => {
  let component: AvisDetailsComponent;
  let fixture: ComponentFixture<AvisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
