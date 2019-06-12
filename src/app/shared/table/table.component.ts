import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';

import { ITdDataTableColumn } from '@covalent/core/data-table';
import { TdDialogService, IPageChangeEvent, TdPagingBarComponent, TdDataTableService } from '@covalent/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(TdPagingBarComponent) pagingBar: TdPagingBarComponent;

  basicData: any[];
  eventLinks: IPageChangeEvent;
  fromRow: any = 1;
  currentPage: any = 1;
  pageSize: any = 5;
  filteredData: any[];
  filteredTotal: number;

  columns: ITdDataTableColumn[] = [
    { name: 'tipo_de_tarifa',  label: 'Tipo de tarifa' },
    { name: 'descripción', label: 'Descripción' },
    { name: 'defecto', label: 'Tipo de tarifa por defecto'},
  ];

  data: any[] = [
    {
      'tipo_de_tarifa': 'Sin datos',
      'descripción': 'Test Description',
      'defecto': 'Test Defecto'
    },
    {
      'tipo_de_tarifa': 'Sin datos',
      'descripción': 'Test Description',
      'defecto': 'Test Defecto'
    },
    {
      'tipo_de_tarifa': 'Sin datos',
      'descripción': 'Test Description',
      'defecto': 'Test Defecto'
    },
    {
      'tipo_de_tarifa': 'Sin datos',
      'descripción': 'Test Description',
      'defecto': 'Test Defecto'
    },
    {
      'tipo_de_tarifa': 'Sin datos',
      'descripción': 'Test Description',
      'defecto': 'Test Defecto'
    },
    {
      'tipo_de_tarifa': 'Sin datos',
      'descripción': 'Test Description',
      'defecto': 'Test Defecto'
    }
  ];

  constructor(private _dataTableService: TdDataTableService) {}

  ngOnInit(): void {
    this.basicData = this.data.slice(0, 10);
    this.filter();
  }

  changeLinks(pagingEvent: IPageChangeEvent): void {
    this.eventLinks = pagingEvent;
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  async filter(): Promise<void> {
    let newData: any[] = this.data;
    newData = await this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }

}
