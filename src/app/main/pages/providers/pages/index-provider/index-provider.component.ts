import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '@services/dialog.service';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-index-provider',
  templateUrl: './index-provider.component.html',
  styleUrls: ['./index-provider.component.scss']
})
export class IndexProviderComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'name', 'statusName', 'options'];
  dataSource!: MatTableDataSource<any>;
  providers = [];
  constructor(private providerService: ProviderService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    this.onGetProviders();
  }

  async onRestoreProvider(data: any): Promise<void>{
    if(await this.dialogService.onShowConfirmation(
      {
        title: '¿Estás seguro de solicitar la reevaluación?',
        desc: 'El proveedor volverá a un estatus "No calificado"',
        icon : 'alert-circle-outline'
      }).toPromise()){
        console.log(true);

      }
  }

  onGetProviders(): void{
    this.providerService.onGetProviders().subscribe((data) => {
      this.filterData(data);
    });
  }

  filterData(data: any): void{
    this.providers = data.map((x: any) => ({
        ...x,
        statusName: x.status.name
      }));
    this.setData();
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
