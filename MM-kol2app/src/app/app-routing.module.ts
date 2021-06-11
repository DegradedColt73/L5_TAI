import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersDetailsMMComponent } from './components/orders-details-mm/orders-details-mm.component';
import { OrdersMMComponent } from './components/orders-mm/orders-mm.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersMMComponent
  },
  {
    path: 'details/:id',
    component: OrdersDetailsMMComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
