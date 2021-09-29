import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleTwoRoutingModule } from './example-two-routing.module';
import { ExampleTwoComponent } from './example-two/example-two.component';


@NgModule({
  declarations: [ExampleTwoComponent],
  imports: [
    CommonModule,
    ExampleTwoRoutingModule
  ]
})
export class ExampleTwoModule { }
