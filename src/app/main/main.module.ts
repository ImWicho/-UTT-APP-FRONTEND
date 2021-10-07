import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SharedComponentsModule } from '@components/shared-components.module';
import { MaterialModule } from '@modules/material.module';

import { MainComponent } from './pages/main/main.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { StoreModule } from '@ngrx/store';
import { userReducerReducer } from './store/reducers';


@NgModule({
  declarations: [MainComponent, OrdersComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    SharedComponentsModule,
    StoreModule.forFeature('user', userReducerReducer)
  ]
})
export class MainModule { }
