import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  onShowDialog(component: any, conf: { width?: number; height?: number }): Observable<any>{
    return this.dialog.open(component, {
      width: conf?.width ? `${conf.width}px` : '600px',
      height: conf?.height ? `${conf.height}px` : 'auto',
    }).afterClosed();
  }

  onShowDialogData(component: any, data: any ,conf?: { width?: number; height?: number }): Observable<any>{
    return this.dialog.open(component, {
      width: conf?.width ? `${conf.width}px` : '600px',
      height: conf?.height ? `${conf.height}px` : 'auto',
      data
    }).afterClosed();
  }
}
