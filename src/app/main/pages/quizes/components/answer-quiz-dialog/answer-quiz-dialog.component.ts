import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-answer-quiz-dialog',
  templateUrl: './answer-quiz-dialog.component.html',
  styleUrls: ['./answer-quiz-dialog.component.scss']
})
export class AnswerQuizDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    console.log(this.data);

  }

}
