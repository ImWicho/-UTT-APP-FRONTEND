import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-index-provider',
  templateUrl: './index-provider.component.html',
  styleUrls: ['./index-provider.component.scss']
})
export class IndexProviderComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'areaName', 'cost', 'options'];
  dataSource!: MatTableDataSource<any>;
  providers = [];
  constructor() { }

  ngOnInit(): void {
  }

  setData(): void{
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.providers;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
