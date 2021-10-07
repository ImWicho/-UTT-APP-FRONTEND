import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
    { path: 'example', loadChildren: () => import('./pages/example/example.module').then(m => m.ExampleModule) },
    { path: 'example-two', loadChildren: () => import('./pages/example-two/example-two.module').then(m => m.ExampleTwoModule) },
    { path: 'orders', component: OrdersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
