import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsMMComponent } from './orders-details-mm.component';

describe('OrdersDetailsMMComponent', () => {
  let component: OrdersDetailsMMComponent;
  let fixture: ComponentFixture<OrdersDetailsMMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsMMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
