import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-index-orders',
  templateUrl: './index-orders.component.html',
  styleUrls: ['./index-orders.component.scss']
})
export class IndexOrdersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'areaName', 'cost', 'options'];
  dataSource!: MatTableDataSource<any>;
  orders = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.onGetOrders();
  }

  onGetOrders(): void{
    this.orderService.onGetOrdersWithOutQuiz().subscribe((data) => {
      this.filterData(data);
    });
  }

  filterData(data: any): void{
    this.orders = data.map((x: any) => ({
      ...x,
      areaName : x.area.name,

    }));
    this.setData();
  }

  setData(): void{
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.orders;
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
