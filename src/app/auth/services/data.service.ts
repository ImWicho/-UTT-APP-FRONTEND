import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private cookieSvc: CookieService) { }

  onSaveCookie(name: string, content: any): void{
    this.onSetCookie(name, content);
  }

  onGetCookie(name: string): string{
    return this.cookieSvc.get(name);
  }

  onGetCookieStorage(name: string): string | null{
    return localStorage.getItem(name);
  }

  onRemoveCookie(name: string): void{
    this.cookieSvc.delete(name);
    localStorage.removeItem(name);
  }

  onRemoveAllCookies(): void{
    this.cookieSvc.deleteAll();
    localStorage.clear();
  }

  onCheckStorage(name: string): boolean{
    return localStorage.getItem(name) ? true : false;
  }

  onCheck(name: string): boolean{
    return this.cookieSvc.check(name);
  }

  isAllowed(path: string | undefined): boolean{
    // if(path === '/'){ return true; }
    const views = JSON.parse(this.onGetCookieStorage('views') || '[]');
    return views.includes(`/main/${path}`);
  }

  private onSetCookie(name: string, content: any): void{
    localStorage.setItem(name,content);
    if (environment.production){
      this.cookieSvc.set(name, content, undefined, undefined, undefined, true, 'None');
    }else{
      this.cookieSvc.set(name, content, undefined, undefined, undefined, false, 'Strict');
    }
  }
}
