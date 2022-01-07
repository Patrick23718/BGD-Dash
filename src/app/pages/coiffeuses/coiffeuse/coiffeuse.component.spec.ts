import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoiffeuseComponent } from './coiffeuse.component';

describe('CoiffeuseComponent', () => {
  let component: CoiffeuseComponent;
  let fixture: ComponentFixture<CoiffeuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoiffeuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoiffeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
