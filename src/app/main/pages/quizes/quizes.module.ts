import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { MaterialModule } from '@modules/material.module';
import { IndexQuizesComponent } from './pages/index-quizes/index-quizes.component';


@NgModule({
  declarations: [IndexQuizesComponent],
  imports: [
    CommonModule,
    QuizesRoutingModule,
    MaterialModule
  ]
})
export class QuizesModule { }
