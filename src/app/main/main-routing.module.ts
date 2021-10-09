import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { RouteGuard } from '@guards/route.guard';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'orders', loadChildren:() => import('./pages/orders/orders.module').then((m) => m.OrdersModule),
        canLoad : [AuthGuard, RouteGuard] },
      { path: 'quizes', loadChildren:() => import('./pages/quizes/quizes.module').then((m) => m.QuizesModule),
        canLoad : [AuthGuard, RouteGuard] },
      { path: 'providers', loadChildren:() => import('./pages/providers/providers.module').then((m) => m.ProvidersModule),
        canLoad : [AuthGuard, RouteGuard] },
      { path: 'results', loadChildren:() => import('./pages/results/results.module').then((m) => m.ResultsModule),
        canLoad : [AuthGuard, RouteGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
