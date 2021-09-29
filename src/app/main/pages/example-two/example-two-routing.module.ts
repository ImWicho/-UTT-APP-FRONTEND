import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleTwoComponent } from './example-two/example-two.component';

const routes: Routes = [
  { path: '', component: ExampleTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleTwoRoutingModule { }
