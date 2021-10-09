import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-index-results',
  templateUrl: './index-results.component.html',
  styleUrls: ['./index-results.component.scss']
})
export class IndexResultsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['quizId', 'is_answered', 'providerName','finalScore', 'options'];
  dataSource!: MatTableDataSource<any>;
  results = [];
  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.onGetResults();
  }

  onGetResults(): void{
    this.resultService.onGetResults().subscribe((data) => {
      this.filterData(data);
    });
  }

  filterData(data: any): void{
    this.results = data.map((x: any) => ({
        ...x,
        providerName: x.provider.name
      }));
    this.setData();
  }

  setData(): void{
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.results;
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
