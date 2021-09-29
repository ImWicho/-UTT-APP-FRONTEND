import { Component, Input, OnInit } from '@angular/core';
import { SidenavService } from '@services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isSmall: boolean | undefined;
  isDarkMode!: boolean;
  constructor(private sideNavService: SidenavService) {}

  ngOnInit(): void {
  }

  toogleSideNav(): void{
    this.sideNavService.toggle$.next();
  }

}
