import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePromoComponent } from './generate-promo.component';

describe('GeneratePromoComponent', () => {
  let component: GeneratePromoComponent;
  let fixture: ComponentFixture<GeneratePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratePromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
