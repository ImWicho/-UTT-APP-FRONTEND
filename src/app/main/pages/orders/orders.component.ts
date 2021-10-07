import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  position: number;
  fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'Orden 1', fecha: "10/09/2021"},
  {position: 2, nombre: 'Orden 2', fecha: "10/09/2021"},
  {position: 3, nombre: 'Orden 3', fecha: "10/09/2021"},
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }


  displayedColumns: string[] = ['position', 'nombre', 'fecha', 'acciones'];
  dataSource = ELEMENT_DATA;
}
