import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComprasPageComponent } from './carrito-compras-page.component';

describe('CarritoComprasPageComponent', () => {
  let component: CarritoComprasPageComponent;
  let fixture: ComponentFixture<CarritoComprasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoComprasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoComprasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
