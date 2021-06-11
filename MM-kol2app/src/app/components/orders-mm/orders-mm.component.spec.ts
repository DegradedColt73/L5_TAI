import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMMComponent } from './orders-mm.component';

describe('OrdersMMComponent', () => {
  let component: OrdersMMComponent;
  let fixture: ComponentFixture<OrdersMMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersMMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
