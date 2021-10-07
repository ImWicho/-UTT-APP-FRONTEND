import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '@services/sidenav.service';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/init.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('matDrawer') drawer!: MatDrawer;
  public isSmall = false;

  constructor(private sidenavService: SidenavService,
              private store: Store<AppState>){}

  ngOnInit(): void{
    this.store.select('ui').subscribe((data) => this.isSmall = data.isResponsive);
    this.sidenavService.toggle$.subscribe(() => this.drawer.toggle());
  }

}
