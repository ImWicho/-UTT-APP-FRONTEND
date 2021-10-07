import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IToken } from '../interfaces/auth';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private dataService: DataService) { }

  onLogin(data: any): Observable<IToken>{
    return this.http.post<IToken>(`${environment.API_URL}/login`, data).pipe(
      tap((token: IToken) => {
        this.dataService.onSaveCookie(environment.NAME_TOKEN, token.token);
      })
    );
  }
}