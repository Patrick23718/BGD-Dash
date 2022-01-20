import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClienteCoiffeuseComponent } from './details-cliente-coiffeuse.component';

describe('DetailsClienteCoiffeuseComponent', () => {
  let component: DetailsClienteCoiffeuseComponent;
  let fixture: ComponentFixture<DetailsClienteCoiffeuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsClienteCoiffeuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsClienteCoiffeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
