import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { IndexOrdersComponent } from './pages/index-orders/index-orders.component';
import { MaterialModule } from '@modules/material.module';


@NgModule({
  declarations: [
    IndexOrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule
  ]
})
export class OrdersModule { }
