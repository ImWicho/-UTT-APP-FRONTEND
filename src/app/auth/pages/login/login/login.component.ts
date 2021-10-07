import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL } from '@constants/regex';
import { AuthService } from 'app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;
  hide = true;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { this.onBuildForm(); }

  ngOnInit(): void {
  }

  onBuildForm(): void{
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.pattern(EMAIL)]],
      password: [null, [Validators.required]]
    });
  }

  onLogin(): void{
    if(this.form.invalid || this.isLoading){ return; }
    this.isLoading = true;
    this.authService.onLogin(this.form.value)
      .subscribe(() => {
        this.router.navigate(['/main']);
      });
  }


}
