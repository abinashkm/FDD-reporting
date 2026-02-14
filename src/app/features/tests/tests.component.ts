import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { TestDialogComponent } from './test-dialog/test-dialog.component';
import { ConfirmDialogComponent } from '../users/confirm-dialog/confirm-dialog.component';

import { ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SiteService } from '../../core/services/site.service';
import { TestTypeService } from '../../core/services/test-type.service';
import { TestService } from '../../core/services/test.service';


@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
 }

  ngOnInit() {
    this.loadTests();
    this.loadReferenceData();
  }


  loadTests() {
    this.testService.getTests().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  loadReferenceData() {
    this.siteService.getSites().subscribe(data => {
      this.sites = data;
    });

    this.testTypeService.getTestTypes().subscribe(data => {
      this.testTypes = data;
    });
  }


 constructor(
  private dialog: MatDialog,
  private testService: TestService,
  private siteService: SiteService,
  private testTypeService: TestTypeService
  ) {}



  displayedColumns: string[] = [
    'id',
    'site',
    'testType',
    'resultValue',
    'unit',
    'date',
    'status',
    'actions'
  ];

    sites: any[] = [];
    testTypes: any[] = [];


  dataSource = new MatTableDataSource<any>([]);

  openAddDialog() {
    const dialogRef = this.dialog.open(TestDialogComponent, {
      width: '500px',
      data: {
        sites: this.sites,
        testTypes: this.testTypes
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newTest = {
          id: `T-${Math.floor(Math.random() * 1000)}`,
          ...result
        };
        this.testService.addTest(newTest).subscribe(() => {
          this.loadTests();
        });
      }
    });
  }

  openEditDialog(test: any) {
    const dialogRef = this.dialog.open(TestDialogComponent, {
      width: '500px',
      data: {
        ...test,
        sites: this.sites,
        testTypes: this.testTypes
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
            this.testService.updateTest({
              ...test,
              ...result
            }).subscribe(() => {
              this.loadTests();
            });
      }
    });
  }

  deleteTest(test: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: test
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.testService.deleteTest(test.id).subscribe(() => {
            this.loadTests();
          });
      }
    });
  }
}
