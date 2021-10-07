import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL } from '@constants/regex';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;
  hide = true;
  constructor(private fb: FormBuilder) { this.onBuildForm() }

  ngOnInit(): void {
  }

  onBuildForm():void{
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.pattern(EMAIL)]],
      password: [null, [Validators.required]]
    })
  }

  onLogin():void{
    if(this.form.invalid || this.isLoading){ return; }
    this.isLoading = true;
    console.log(this.form.value);
    
  }


}
