import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemMMComponent } from './orders-item-mm.component';

describe('OrdersItemMMComponent', () => {
  let component: OrdersItemMMComponent;
  let fixture: ComponentFixture<OrdersItemMMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemMMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
