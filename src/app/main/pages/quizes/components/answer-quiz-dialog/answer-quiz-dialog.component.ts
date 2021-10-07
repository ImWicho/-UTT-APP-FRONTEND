import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IScore } from '../../interfaces/i-score';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-answer-quiz-dialog',
  templateUrl: './answer-quiz-dialog.component.html',
  styleUrls: ['./answer-quiz-dialog.component.scss']
})
export class AnswerQuizDialogComponent implements OnInit {
  providers: any = [];
  scores: IScore[] = [];
  form!: FormGroup;
  resultId: FormControl = new FormControl(null, [Validators.required]);
  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private quizService: QuizService) { this.onBuldForm();  }

  ngOnInit(): void {
    this.providers = this.data.results.filter((x: any) => x.provider.status_id === '1');
    this.onGetScores();
  }

  onGetScores(): void{
    this.quizService.onGetScores().subscribe((data) => {
      this.scores = data;
    });
  }

  onBuldForm(): void{
    this.form = this.fb.group({
      one: [null, [Validators.required]],
      two: [null, [Validators.required]],
      three: [null, [Validators.required]],
      four: [null, [Validators.required]],
    });
  }

}
