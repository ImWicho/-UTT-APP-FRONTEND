import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleRoutingModule } from './example-routing.module';
import { SharedComponentsModule } from '@components/shared-components.module';
import { MaterialModule } from '@modules/material.module';

import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    MaterialModule,
    SharedComponentsModule
  ]
})
export class ExampleModule { }
