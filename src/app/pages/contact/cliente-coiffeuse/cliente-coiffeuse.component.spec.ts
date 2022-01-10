import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCoiffeuseComponent } from './cliente-coiffeuse.component';

describe('ClienteCoiffeuseComponent', () => {
  let component: ClienteCoiffeuseComponent;
  let fixture: ComponentFixture<ClienteCoiffeuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCoiffeuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCoiffeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
