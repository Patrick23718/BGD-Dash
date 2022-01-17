import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCoiffeusesComponent } from './liste-coiffeuses.component';

describe('ListeCoiffeusesComponent', () => {
  let component: ListeCoiffeusesComponent;
  let fixture: ComponentFixture<ListeCoiffeusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCoiffeusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCoiffeusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
