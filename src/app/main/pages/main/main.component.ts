import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '@services/sidenav.service';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/init.reducer';
import { UserService } from 'app/main/services/user.service';
import { saveUser } from 'app/main/store/userStore/actions';
import { isLoading, stopLoading } from '@redux/app.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('matDrawer') drawer!: MatDrawer;
  public isSmall = false;

  constructor(private sidenavService: SidenavService,
              private store: Store<AppState>,
              private userService: UserService){}

  ngOnInit(): void{
    this.store.select('ui').subscribe((data) => this.isSmall = data.isResponsive);
    this.sidenavService.toggle$.subscribe(() => this.drawer.toggle());
    this.store.dispatch( isLoading());
    this.userService.onGetUser().subscribe((data) => {
      this.store.dispatch( saveUser({ user: data }) );
      this.store.dispatch( stopLoading());
    });
  }

}
