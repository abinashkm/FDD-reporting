import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { TestTypeDialogComponent } from './test-type-dialog/test-type-dialog.component';
import { ConfirmDialogComponent } from '../users/confirm-dialog/confirm-dialog.component';
import { MOCK_TEST_TYPES } from '../../core/mock-data/mock-test-type';

@Component({
  selector: 'app-test-types',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './test-type.component.html',
  styleUrls: ['./test-type.component.scss']
})
export class TestTypeComponent {

  constructor(private dialog: MatDialog) {}

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'status',
    'actions'
  ];

  testTypes = [...MOCK_TEST_TYPES];


  openAddDialog() {
    const dialogRef = this.dialog.open(TestTypeDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newType = {
          id: `TT-${Math.floor(Math.random() * 1000)}`,
          ...result
        };
        this.testTypes = [...this.testTypes, newType];
      }
    });
  }

  openEditDialog(testType: any) {
    const dialogRef = this.dialog.open(TestTypeDialogComponent, {
      width: '450px',
      data: testType
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.testTypes = this.testTypes.map(t =>
          t.id === testType.id ? { ...t, ...result } : t
        );
      }
    });
  }

  deleteTestType(testType: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: testType
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.testTypes = this.testTypes.filter(t => t.id !== testType.id);
      }
    });
  }
}
